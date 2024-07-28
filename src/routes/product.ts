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
    .leftJoin("product_stock", "products.id", "product_stock.product_id")
    .leftJoin("product_images", "products.id", "product_images.product_id");

  try {
    await executeQuery(
      res,
      query,
      "GET Request Called",
      "Category not found",
      processSQLProductExtraData
    );
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({error: "Internal Server Error"});
  }
});

router.get("/:id", async (req, res) => {
  const {id} = req.params;

  const query = knexDb("products")
    .select(
      "products.*",
      "product_stock.size",
      "product_stock.count",
      "product_images.image_url"
    )
    .leftJoin("product_stock", "products.id", "product_stock.product_id")
    .leftJoin("product_images", "products.id", "product_images.product_id")
    .where("products.id", id);

  try {
    await executeQuery(
      res,
      query,
      "GET Request Called",
      "Category not found",
      processSQLProductExtraData
    );
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({error: "Internal Server Error"});
  }
});

export default router;
