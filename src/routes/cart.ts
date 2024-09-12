import express from "express";
import knexDb from "../knexDb.js";
import createResponse from "./routerUtilities/createResponse.js";
import {uuid} from "uuidv4";
import jwt from "jsonwebtoken";
import {JwtPayload, VerifyErrors} from "jsonwebtoken";
import {Request, Response, NextFunction} from "express";

const router = express.Router();

interface CartDatabase {
  user_id: string;
  product_id: string;
  product_size: string;
  cart_quantity: number;
  created_at: string;
  updated_at: string;
}

interface StockDatabase {
  user_id: string;
  size: string;
  count: number;
}

interface AuthenticatedRequest extends Request {
  user_id?: string;
}

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
      if (!jwtPayload.user_id)
        throw new Error("User user_id in the token is invalid");
      req.user_id = jwtPayload.user_id;
      next();
    }
  );
};

router.get(
  "/cart",
  authenticateToken,
  async (req: AuthenticatedRequest, res: Response) => {
    const user_id = req.user_id;

    try {
      if (!user_id) throw new Error("Invalid user ID");

      const cartItems = (await knexDb("cart_items").where(
        "cart_items.user_id",
        user_id
      )) as CartDatabase[] | [];

      res
        .status(200)
        .send(createResponse(true, "Fetching cart data", cartItems));
    } catch (err) {
      console.error(err);
      res.status(500).send(createResponse(false, "Server error"));
    }
  }
);

router.post("/add", authenticateToken, async (req, res) => {
  const {user_id, product_id, product_size, cart_quantity} = req.body;

  try {
    if (!(user_id && product_id && product_size && cart_quantity))
      throw new Error("Invalid request body");

    const itemStock = (await knexDb("product_stock")
      .where("product_stock.product_id", product_id)
      .andWhere("product_stock.size", product_size)
      .first()) as StockDatabase | undefined;

    if (!itemStock) throw new Error("This size is not present in database");
    if (itemStock.count < cart_quantity)
      throw new Error("User reqests more product count than is in database");

    const existingItem = (await knexDb("cart_items")
      .where("cart_items.user_id", user_id)
      .andWhere("cart_items.product_id", product_id)
      .andWhere("cart_items.product_size", product_size)
      .first()) as CartDatabase | undefined;

    if (existingItem) {
      await knexDb("cart_items")
        .where("cart_items.user_id", user_id)
        .andWhere("cart_items.product_id", product_id)
        .andWhere("cart_items.product_size", product_size)
        .update({cart_quantity: cart_quantity});
    } else {
      await knexDb("cart_items").insert({
        cart_item_id: uuid(),
        user_id: user_id,
        product_id,
        product_size,
        cart_quantity,
        created_at: knexDb.fn.now(),
        updated_at: knexDb.fn.now(),
      });
    }

    res.status(200).send(
      createResponse(true, "Item added to cart", {
        user_id,
        product_id,
        product_size,
        cart_quantity,
      })
    );
  } catch (err) {
    console.error(err);
    res.status(500).send(createResponse(false, "Server error"));
  }
});

export default router;
