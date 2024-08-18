import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import {Request, Response, NextFunction} from "express";
import {JwtPayload} from "jsonwebtoken";
import knexDb from "../knexDb";
import {uuid} from "uuidv4";

interface AuthenticatedRequest extends Request {
  user?: string | JwtPayload;
}

const router = express.Router();

router.post("/register", async (req, res) => {
  const {username, password} = req.body;

  try {
    const query = await knexDb("users")
      .select("users.id", "users.username")
      .where("users.username", username);

    if (query.length > 0) {
      return res.status(400).json({message: "User already exists"});
    }

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) {
        console.error("Error hashing password:", err);
        return res.status(500).json({message: "Internal server error"});
      }

      await knexDb("users").insert({
        id: uuid(),
        username: username,
        password: hash,
        email: "noreply@example.com",
      });

      res.status(201).json({message: "User registered successfully"});
    });
  } catch (e) {
    console.error(e);
  }
});

router.post("/login", async (req, res) => {
  const {username, password} = req.body;
  try {
    const query = await knexDb("users")
      .select("users.id", "users.username", "users.password")
      .where("users.username", username);

    if (query.length !== 1) {
      return res.status(400).json({message: "Invalid credentials"});
    }

    const user = query[0];

    bcrypt.compare(password, user.password, function (err, same) {
      if (err) {
        console.error("Error comparing credentials:", err);
        return res.status(500).json({message: "Internal server error"});
      }
      if (!same) {
        return res.status(500).json({message: "Invalid credentials"});
      }
      if (!process.env.JWT_SECRET) {
        console.error("Secret not specified");
        return res.status(500).json({message: "Internal server error"});
      }
      const token = jwt.sign(
        {username: user.username},
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.json({message: "Login successful", token});
    });
  } catch (e) {
    console.error(e);
  }
});

const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401).json({message: "Invalid token"});

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.sendStatus(403).json({message: "Invalid credentials"});

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
