import express from "express";
import knexDb from "../knexDb.js";
import createResponse from "./routerUtilities/createResponse.js";
import {uuid} from "uuidv4";
import jwt from "jsonwebtoken";
import {JwtPayload, VerifyErrors} from "jsonwebtoken";
import {Request, Response, NextFunction} from "express";

const router = express.Router();

interface CartDatabase {
  product_id: string;
  product_size: string;
  cart_quantity: number;
}

interface StockDatabase {
  user_id: string;
  size: string;
  count: number;
}

interface AuthenticatedRequest extends Request {
  user_id?: string;
  guest?: boolean;
}

const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  //NOTE - middleware for cart route
  const userToken = req.cookies.token;
  const guestToken = req.cookies.guestToken;

  if (!userToken && !guestToken) {
    return res.status(401).send(createResponse(false, "Invalid token"));
  }

  const token = userToken ? userToken : guestToken;
  const guest = userToken ? false : true;
  const cookieName = guest ? "guestToken" : "token";
  req.guest = guest;

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (err: VerifyErrors | null, jwtPayload: string | JwtPayload | undefined) => {
      if (err)
        return res
          .cookie(cookieName, "", {
            httpOnly: true,
            secure: Boolean(process.env.CONNECTION_SECURE),
            sameSite: "none",
            expires: new Date(0),
          })
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
  "/get-items",
  authenticateToken,
  async (req: AuthenticatedRequest, res: Response) => {
    const {user_id, guest} = req;
    console.log(user_id, guest);
    const table = guest ? "guest_cart_items" : "cart_items";

    try {
      if (!user_id) throw new Error("Invalid user ID");

      const cartItems = await knexDb(table)
        .select(
          `${table}.product_id`,
          `${table}.product_size`,
          `${table}.cart_quantity`,
          knexDb.raw(`
          json_build_object(
            'brand', products.brand,
            'model', products.model,
            'gender', products.gender,
            'price', products.price,
            'thumbnail', products.thumbnail,
            'max_order', product_stock.count
          ) as item_data
        `)
        )
        .leftJoin("products", `${table}.product_id`, "products.product_id")
        .leftJoin("product_stock", function () {
          this.on(`${table}.product_id`, "=", "product_stock.product_id").andOn(
            `${table}.product_size`,
            "=",
            "product_stock.size"
          );
        })
        .where(`${table}.user_id`, user_id);
      res
        .status(200)
        .send(createResponse(true, "Fetching cart data", cartItems));
      console.log(cartItems);
    } catch (err) {
      console.error(err);
      res.status(500).send(createResponse(false, "Server error"));
    }
  }
);

router.post(
  "/add-item",
  authenticateToken,
  async (req: AuthenticatedRequest, res: Response) => {
    const {user_id, guest} = req;
    console.log(user_id, guest);
    const table = guest ? "guest_cart_items" : "cart_items";

    const {product_id, product_size, cart_quantity} = req.body;

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

      const existingItem = (await knexDb(table)
        .where(`${table}.user_id`, user_id)
        .andWhere(`${table}.product_id`, product_id)
        .andWhere(`${table}.product_size`, product_size)
        .first()) as CartDatabase | undefined;

      if (existingItem) {
        await knexDb(table)
          .where(`${table}.user_id`, user_id)
          .andWhere(`${table}.product_id`, product_id)
          .andWhere(`${table}.product_size`, product_size)
          .update({cart_quantity: cart_quantity});
      } else {
        await knexDb(table).insert({
          cart_item_id: uuid(),
          user_id: user_id,
          product_id,
          product_size,
          cart_quantity,
          created_at: knexDb.fn.now(),
          updated_at: knexDb.fn.now(),
        });
      }

      const cartItem = await knexDb(table)
        .select(
          `${table}.product_id`,
          `${table}.product_size`,
          `${table}.cart_quantity`,
          knexDb.raw(`
        json_build_object(
          'brand', products.brand,
          'model', products.model,
          'gender', products.gender,
          'price', products.price,
          'thumbnail', products.thumbnail,
          'max_order', product_stock.count
        ) as item_data
      `)
        )
        .leftJoin("products", `${table}.product_id`, "products.product_id")
        .leftJoin("product_stock", function () {
          this.on(`${table}.product_id`, "=", "product_stock.product_id").andOn(
            `${table}.product_size`,
            "=",
            "product_stock.size"
          );
        })
        .where(`${table}.user_id`, user_id)
        .andWhere(`${table}.product_id`, product_id)
        .andWhere(`${table}.product_size`, product_size)
        .first();

      console.log(cartItem);

      res
        .status(200)
        .send(createResponse(true, "Item added to cart", cartItem));
    } catch (err) {
      console.error(err);
      res.status(500).send(createResponse(false, "Server error"));
    }
  }
);

router.delete(
  "/delete-item",
  authenticateToken,
  async (req: AuthenticatedRequest, res: Response) => {
    const {user_id, guest} = req;
    console.log(user_id, guest);
    const table = guest ? "guest_cart_items" : "cart_items";

    const {product_id, product_size} = req.query;

    console.log(product_id, product_size);

    try {
      if (!(user_id && product_id && product_size))
        throw new Error("Invalid request body");

      await knexDb(table)
        .where(`${table}.user_id`, user_id)
        .andWhere(`${table}.product_id`, product_id)
        .andWhere(`${table}.product_size`, product_size)
        .del();

      res.status(200).send(createResponse(true, "Item removed from cart"));
    } catch (err) {
      console.error(err);
      res.status(500).send(createResponse(false, "Server error"));
    }
  }
);

export default router;
