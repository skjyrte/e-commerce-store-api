import express from "express";
import pool from "../db.js";
import {
  processSQLRows,
  createResponse,
  processVariants,
} from "./routerUtilities.js";

const router = express.Router();

router.get("/:gender", async (req, res) => {
  const client = await pool.connect();
  const { gender } = req.params;
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
        products.gender = $1`,
      [gender]
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

router.get("/:gender/category/:category", async (req, res) => {
  const client = await pool.connect();
  const { gender, category } = req.params;
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
        products.gender = $1 AND products.category = $2`,
      [gender, category]
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

router.get("/:gender/category/:category/:variants", async (req, res) => {
  const client = await pool.connect();
  const { gender, category, variants } = req.params;
  const { material } = req.query;

  const { brandsArray, colorsArray, sizesArray } = processVariants(variants);

  try {
    let query = `
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
      WHERE products.id IN (
      SELECT DISTINCT products.id
      FROM products
      LEFT JOIN product_stock ON products.id = product_stock.product_id
      WHERE 1=1 AND products.gender = $1 AND products.category = $2`;

    const queryParams: any[] = [gender, category];
    let paramIndex = 3;

    if (brandsArray.length > 0 && brandsArray[0] !== "") {
      brandsArray.forEach((brand, index) => {
        query +=
          index === 0
            ? ` AND products.brand = $${paramIndex++}`
            : ` OR products.brand = $${paramIndex++}`;
        queryParams.push(brand);
      });
    }

    if (colorsArray.length > 0 && colorsArray[0] !== "") {
      colorsArray.forEach((color, index) => {
        query +=
          index === 0
            ? ` AND products.color = $${paramIndex++}`
            : ` OR products.color = $${paramIndex++}`;
        queryParams.push(color);
      });
    }

    if (sizesArray.length > 0 && sizesArray[0] !== "") {
      sizesArray.forEach((size, index) => {
        query +=
          index === 0
            ? ` AND product_stock.size = $${paramIndex++}`
            : ` OR product_stock.size = $${paramIndex++}`;
        queryParams.push(size);
      });
    }

    if (material) {
      query += ` AND products.material = $${paramIndex++}`;
      queryParams.push(material);
    }

    query += `)`;

    const result = await client.query(query, queryParams);

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
