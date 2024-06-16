import express from "express";
import pool from "../db.js";

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
      console.log(result.rows);
      const product = {
        ...result.rows[0],
        size: undefined,
        count: undefined,
        image_url: undefined,
        stock: Array.from(
          new Map(
            result.rows.map((item) => [
              item.size,
              { size: item.size, count: item.count },
            ])
          ).values()
        ),
        images: [...new Set(result.rows.map((row) => row.image_url))],
      };
      res.status(200).json(product);
    } else {
      res.status(404).json({ success: false, message: "Product not found" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  } finally {
    client.release();
  }
});

export default router;
