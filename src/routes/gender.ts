import express from "express";
import pool from "../db.js";
import processSQLProductBasicData from "./routerUtilities/processSQLProductBasicData";
import createResponse from "./routerUtilities/createResponse";
import processVariants from "./routerUtilities/processFilterPath.js";
import createQueryArray from "./routerUtilities/createQueryArray";

const router = express.Router();

router.get("/:gender", async (req, res) => {
  const client = await pool.connect();
  const {gender} = req.params;
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
      const processedResult = processSQLProductBasicData(result.rows);
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
  const {gender, category} = req.params;
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
      const processedResult = processSQLProductBasicData(result.rows);
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
  const {gender, category, variants} = req.params;
  const {material} = req.query;

  /* create arrays */
  const {brandsArray, colorsArray, sizesArray} = processVariants(variants);
  const materialsArray = createQueryArray(material);

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

    const queryParams: string[] = [gender, category];
    let paramIndex = queryParams.length + 1;

    const joinVariants = (queryArray: string[], queryTitle: string) => {
      let subQuery = "";
      queryArray.forEach((q, i) => {
        if (i === 0) {
          subQuery += ` AND (${queryTitle} = $${paramIndex++}`;
          queryParams.push(q);
        } else {
          subQuery += ` OR ${queryTitle} = $${paramIndex++}`;
          queryParams.push(q);
        }
      });
      if (subQuery.length !== 0) {
        subQuery += ")";
      }
      query += subQuery;
    };

    joinVariants(sizesArray, "product_stock.size");
    joinVariants(colorsArray, "products.color");
    joinVariants(brandsArray, "products.brand");
    joinVariants(materialsArray, "products.material");

    query += ")";

    const result = await client.query(query, queryParams);

    if (result.rows.length > 0) {
      const processedResult = processSQLProductBasicData(result.rows);
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
