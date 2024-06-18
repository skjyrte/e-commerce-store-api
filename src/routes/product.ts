import express from "express";
import pool from "../db.js";
import { processSQLRows, createResponse } from "./routerUtilities.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM products");
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  } finally {
    client.release();
  }
});

router.get("/:id", async (req, res) => {
  const client = await pool.connect();
  const { id } = req.params;
  try {
    const result = await client.query(
      `SELECT 
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
         products.id = $1`,
      [id]
    );

    if (result.rows.length > 0) {
      const processedResult = processSQLRows(result.rows);
      res
        .status(200)
        .send(createResponse(true, "GET Request Called", processedResult));
    } else {
      res.status(404).send(createResponse(false, "Product not found"));
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send(createResponse(false, "Internal server error"));
  } finally {
    client.release();
  }
});

export default router;

/* ALTERNATIVE SOLUTION
import express from "express";
import { handleGetRequest } from "./common.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const query = `
    SELECT * FROM products
  `;
  handleGetRequest(query, [], res);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
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
      products.id = $1
  `;
  handleGetRequest(query, [id], res);

  */
