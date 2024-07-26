import express from "express";
import processSQLProductExtraData from "./routerUtilities/processSQLProductExtraData.js";
import executeQuery from "./routerUtilities/executeQuery.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const query = `
    SELECT 
        products.*, 
        product_stock.size, 
        product_stock.count, 
        product_images.image_url
        FROM 
          products
        LEFT JOIN 
          product_stock ON products.id = product_stock.product_id
        LEFT JOIN 
          product_images ON products.id = product_images.product_id
       `;
  await executeQuery(
    res,
    query,
    [],
    "GET Request Called",
    "Products not found",
    processSQLProductExtraData
  );
});

router.get("/:id", async (req, res) => {
  const {id} = req.params;
  const query = `
    SELECT 
        products.*, 
        product_stock.size, 
        product_stock.count, 
        product_images.image_url
        FROM 
          products
        LEFT JOIN 
          product_stock ON products.id = product_stock.product_id
        LEFT JOIN 
          product_images ON products.id = product_images.product_id
       WHERE 
         products.id = $1`;
  await executeQuery(
    res,
    query,
    [id],
    "GET Request Called",
    "Products not found",
    processSQLProductExtraData
  );
});

export default router;
