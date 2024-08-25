import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import {Request, Response, NextFunction} from "express";
import {JwtPayload} from "jsonwebtoken";
import knexDb from "../knexDb.js";
import {uuid} from "uuidv4";
import createResponse from "./routerUtilities/createResponse.js";

interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

const router = express.Router();

router.post("/register", async (req, res) => {
  const {email, password, name, address} = req.body;

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
        name: name,
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
        "users.name",
        "users.address"
      )
      .where("users.email", email);

    if (query.length !== 1) {
      return res.status(400).send(createResponse(false, "Invalid credentials"));
    }

    const user = query[0];
    console.log(user);

    const {name, address} = user;

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

      if (!process.env.JWT_SECRET) {
        console.error("Secret not specified");
        return res
          .status(500)
          .send(createResponse(false, "Internal server error"));
      }

      const token = jwt.sign({email: user.email}, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      console.log(token);

      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
          maxAge: 3600000,
        })
        .send(createResponse(true, "Login successful", {email, name, address}));
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
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.sendStatus(401).send(createResponse(false, "Invalid token"));

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err)
      return res
        .sendStatus(403)
        .send(createResponse(false, "Invalid credentials"));

    req.user = user;
    next();
  });
};

router.get(
  "/protected",
  authenticateToken,
  (req: AuthenticatedRequest, res: Response) => {
    res.json({message: "Protected route", user: req.user});
  }
);

export default router;
