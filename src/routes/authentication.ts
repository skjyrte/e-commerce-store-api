import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import {Request, Response, NextFunction} from "express";
import {JwtPayload} from "jsonwebtoken";
import knexDb from "../knexDb.js";
import {uuid} from "uuidv4";
import createResponse from "./routerUtilities/createResponse.js";
import {VerifyErrors} from "jsonwebtoken";

interface BasicUserData {
  user_id: string;
  guest: false;
  email: string;
  first_name: string;
  second_name: string;
  address: string;
}

interface GuestUserData {
  user_id: string;
  guest: true;
}

interface AuthenticatedRequest extends Request {
  user_id?: string;
}

const router = express.Router();

const authenticateToken = (guest: boolean) => {
  //NOTE - middleware for auth route
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = guest ? req.cookies.guestToken : req.cookies.token;
    const cookieName = guest ? "guestToken" : "token";

    if (!token) {
      return res.status(401).send(createResponse(false, "Invalid token"));
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      (
        err: VerifyErrors | null,
        jwtPayload: string | JwtPayload | undefined
      ) => {
        if (err)
          return res
            .cookie(cookieName, "", {
              httpOnly: true,
              secure: process.env.CONNECTION_SECURE === "TRUE",
              sameSite: "none",
              expires: new Date(0),
              domain: process.env.CONNECTION_DOMAIN,
              path: "/",
            })
            .status(403)
            .send(createResponse(false, "Invalid credentials"));

        if (typeof jwtPayload === "undefined" || typeof jwtPayload === "string")
          throw new Error("Invalid jwt payload");

        if (!jwtPayload.user_id)
          throw new Error("User ID in the token is invalid");

        req.user_id = jwtPayload.user_id;
        next();
      }
    );
  };
};

router.post("/register", async (req, res) => {
  const {email, password, first_name, second_name, address} = req.body;

  try {
    const query = await knexDb("users")
      .select("users.user_id", "users.email")
      .where("users.email", email);

    if (query.length > 0) {
      return res.status(400).send(createResponse(false, "User already exists"));
    }

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) {
        console.error("Error hashing password:", err);
        return res
          .status(500)
          .send(createResponse(false, "Internal server error"));
      }

      await knexDb("users").insert({
        user_id: uuid(),
        email: email,
        password: hash,
        first_name: first_name,
        second_name: second_name,
        address: address,
      });

      res
        .status(201)
        .send(createResponse(true, "User registered successfully"));
    });
  } catch (e) {
    console.error(e);
  }
});

router.post("/register-guest-token", async (req, res) => {
  try {
    if (!process.env.JWT_SECRET) throw new Error("Secret not defined");
    const user_id = uuid();

    const token = jwt.sign({user_id}, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    const saltRounds = 10;
    bcrypt.hash(token, saltRounds, async function (err, hash) {
      if (err) {
        console.error("Error hashing token:", err);
        return res
          .status(500)
          .send(createResponse(false, "Internal server error"));
      }

      await knexDb("guest_users").insert({
        user_id: user_id,
        token: hash,
      });

      const userData: GuestUserData = {
        user_id: user_id,
        guest: true,
      };

      res
        .status(200)
        .cookie("guestToken", token, {
          httpOnly: true,
          secure: process.env.CONNECTION_SECURE === "TRUE",
          sameSite: "none",
          maxAge: 2592000000,
          domain: process.env.CONNECTION_DOMAIN,
          path: "/",
        })
        .send(
          createResponse(true, "Guest user token registered successfully", {
            ...userData,
          })
        );
    });
  } catch (e) {
    console.error(e);
  }
});

router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  try {
    const query = await knexDb("users")
      .select(
        "users.user_id",
        "users.email",
        "users.password",
        "users.first_name",
        "users.second_name",
        "users.address"
      )
      .where("users.email", email);

    if (query.length !== 1) {
      return res.status(400).send(createResponse(false, "Invalid credentials"));
    }
    const user = query[0];

    bcrypt.compare(password, user.password, (err, same) => {
      if (err) {
        console.error("Error comparing credentials:", err);
        return res
          .status(500)
          .send(createResponse(false, "Internal server error"));
      }

      if (!same) {
        return res
          .status(401)
          .send(createResponse(false, "Invalid credentials"));
      }

      if (!process.env.JWT_SECRET) throw new Error("Secret not defined");

      const token = jwt.sign({user_id: user.user_id}, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      const userData: BasicUserData = {
        user_id: user.user_id,
        guest: false,
        email: user.email,
        first_name: user.first_name,
        second_name: user.second_name,
        address: user.address,
      };

      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.CONNECTION_SECURE === "TRUE",
          sameSite: "none",
          maxAge: 3600000,
          domain: process.env.CONNECTION_DOMAIN,
          path: "/",
        })
        .send(createResponse(true, "Login successful", {...userData}));
    });
  } catch (e) {
    console.error("Unexpected server error:", e);
    res.status(500).send(createResponse(false, "Internal server error"));
  }
});

router.get(
  "/validate-user-token",
  authenticateToken(false),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const query = await knexDb("users")
        .select(
          "users.user_id",
          "users.email",
          "users.password",
          "users.first_name",
          "users.second_name",
          "users.address"
        )
        .where("users.user_id", req.user_id);

      if (query.length !== 1) {
        return res
          .status(400)
          .send(createResponse(false, "Invalid credentials"));
      }
      const user = query[0];

      const userData: BasicUserData = {
        user_id: user.user_id,
        guest: false,
        email: user.email,
        first_name: user.first_name,
        second_name: user.second_name,
        address: user.address,
      };

      res
        .status(200)
        .send(createResponse(true, "User token is valid", {...userData}));
    } catch (e) {
      console.error("Unexpected server error:", e);
      res.status(500).send(createResponse(false, "Internal server error"));
    }
  }
);

router.get(
  "/validate-guest-token",
  authenticateToken(true),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const query = await knexDb("guest_users")
        .select("guest_users.user_id")
        .where("guest_users.user_id", req.user_id);

      if (query.length !== 1) {
        return res
          .status(400)
          .send(createResponse(false, "Invalid credentials"));
      }
      const user = query[0];

      const userData: GuestUserData = {
        user_id: user.user_id,
        guest: true,
      };

      res
        .status(200)
        .send(createResponse(true, "Guest user token is valid", {...userData}));
    } catch (e) {
      console.error("Unexpected server error:", e);
      res.status(500).send(createResponse(false, "Internal server error"));
    }
  }
);

router.post(
  "/logout",
  authenticateToken(false),
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      //NOTE - remove guest user data if present
      if (
        await knexDb("guest_users")
          .where("guest_users.user_id", req.user_id)
          .first()
      ) {
        await knexDb("guest_users")
          .where("guest_users.user_id", req.user_id)
          .del();
      }
      //NOTE - remove guest cart data if present
      if (
        await knexDb("guest_cart_items")
          .where("guest_cart_items.user_id", req.user_id)
          .first()
      ) {
        await knexDb("guest_cart_items")
          .where("guest_cart_items.user_id", req.user_id)
          .del();
      }

      res
        .status(200)
        .cookie("token", "", {
          httpOnly: true,
          secure: process.env.CONNECTION_SECURE === "TRUE",
          sameSite: "none",
          expires: new Date(0),
          domain: process.env.CONNECTION_DOMAIN,
          path: "/",
        })
        .cookie("guestToken", "", {
          httpOnly: true,
          secure: process.env.CONNECTION_SECURE === "TRUE",
          sameSite: "none",
          expires: new Date(0),
          domain: process.env.CONNECTION_DOMAIN,
          path: "/",
        })
        .send(createResponse(true, "Logout successful"));
    } catch (e) {
      console.error("Unexpected server error:", e);
      res.status(500).send(createResponse(false, "Internal server error"));
    }
  }
);

/* router.get(
  "/protected",
  authenticateToken,
  (req: AuthenticatedRequest, res: Response) => {
    res.json({message: "Protected route", user_id: req.user_id});
  }
); */

export default router;
