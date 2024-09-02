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
  id: string;
  email: string;
  first_name: string;
  second_name: string;
  address: string;
}

interface AuthenticatedRequest extends Request {
  id?: string;
}

const router = express.Router();

router.post("/register", async (req, res) => {
  const {email, password, first_name, second_name, address} = req.body;

  try {
    const query = await knexDb("users")
      .select("users.id", "users.email")
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
        id: uuid(),
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

router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  try {
    const query = await knexDb("users")
      .select(
        "users.id",
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

      const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      const userData: BasicUserData = {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        second_name: user.second_name,
        address: user.address,
      };

      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          secure: Boolean(process.env.CONNECTION_SECURE),
          sameSite: "none",
          maxAge: 3600000,
        })
        .send(createResponse(true, "Login successful", {...userData}));
    });
  } catch (e) {
    console.error("Unexpected server error:", e);
    res.status(500).send(createResponse(false, "Internal server error"));
  }
});

const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send(createResponse(false, "Invalid token"));
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (err: VerifyErrors | null, jwtPayload: string | JwtPayload | undefined) => {
      if (err)
        return res
          .status(403)
          .send(createResponse(false, "Invalid credentials"));

      if (typeof jwtPayload === "undefined" || typeof jwtPayload === "string")
        throw new Error("Invalid jwt payload");
      //NOTE - i assume we dont need token details right now
      if (!jwtPayload.id) throw new Error("User ID in the token is invalid");
      req.id = jwtPayload.id;
      next();
    }
  );
};

router.get(
  "/check-session",
  authenticateToken,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const query = await knexDb("users")
        .select(
          "users.id",
          "users.email",
          "users.password",
          "users.first_name",
          "users.second_name",
          "users.address"
        )
        .where("users.id", req.id);

      if (query.length !== 1) {
        return res
          .status(400)
          .send(createResponse(false, "Invalid credentials"));
      }
      const user = query[0];

      const userData: BasicUserData = {
        id: user.id,
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
  "/protected",
  authenticateToken,
  (req: AuthenticatedRequest, res: Response) => {
    res.json({message: "Protected route", id: req.id});
  }
);

export default router;
