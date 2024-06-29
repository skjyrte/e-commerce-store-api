import express from "express";
import pool from "../db.js";
import {processSQLRows, createResponse} from "./routerUtilities.js";

const router = express.Router();

router.get("/:category", async (req, res) => {
  const client = await pool.connect();
  const {category} = req.params;
  try {
    const result = await client.query(
      `SELECT 
        products.*, 
        product_stock.size, 
        product_stock.count
      FROM 
        products
      LEFT JOIN 
        product_stock ON products.id = product_stock.product_id
      WHERE 
        products.category = $1`,
      [category]
    );

    if (result.rows.length > 0) {
      const processedResult = processSQLRows(result.rows);
      res
        .status(200)
        .send(createResponse(true, "GET Request Called", processedResult));
    } else {
      res.status(404).send(createResponse(false, "Category not found"));
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send(createResponse(false, "Internal server error"));
  } finally {
    client.release();
  }
});

export default router;
