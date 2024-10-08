import express from "express";
import processSQLProductExtraData from "./routerUtilities/processSQLProductExtraData.js";
import executeQuery from "./routerUtilities/executeQuery.js";
import knexDb from "../knexDb.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const query = knexDb("products")
    .select(
      "products.*",
      "product_stock.size",
      "product_stock.count",
      "product_images.image_url"
    )
    .leftJoin(
      "product_stock",
      "products.product_id",
      "product_stock.product_id"
    )
    .leftJoin(
      "product_images",
      "products.product_id",
      "product_images.product_id"
    );

  try {
    await executeQuery(
      res,
      query,
      "GET Request Called",
      "Product not found",
      processSQLProductExtraData
    );
  } catch (e) {
    console.error("Error on route:", e);
    res.status(500).json({error: "Internal Server Error"});
  }
});

router.get("/:product_id", async (req, res) => {
  const {product_id} = req.params;

  const query = knexDb("products")
    .select(
      "products.*",
      "product_stock.size",
      "product_stock.count",
      "product_images.image_url"
    )
    .leftJoin(
      "product_stock",
      "products.product_id",
      "product_stock.product_id"
    )
    .leftJoin(
      "product_images",
      "products.product_id",
      "product_images.product_id"
    )
    .where("products.product_id", product_id);

  try {
    await executeQuery(
      res,
      query,
      "GET Request Called",
      "Product not found",
      processSQLProductExtraData
    );
  } catch (e) {
    console.error("Error on route:", e);
    res.status(500).json({error: "Internal Server Error"});
  }
});

export default router;
