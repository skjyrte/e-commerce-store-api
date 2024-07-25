import express from "express";
import pool from "../db.js";
import processSQLProductBasicData from "./routerUtilities/processSQLProductBasicData.js";
import createResponse from "./routerUtilities/createResponse.js";
import {processFilterPath} from "./routerUtilities/processFilterPath.js";
import {joinSqlQuery} from "./routerUtilities/joinSqlQuery.js";
import createQueryArray from "./routerUtilities/createQueryArray.js";

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

  try {
    const objToCheck = processFilterPath(variants);

    if (!objToCheck) {
      throw new Error("Error during processing filter path");
    }
    const {brandsArray, colorsArray, sizesArray} = objToCheck;

    const materialsArray = createQueryArray(material);
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
      WHERE products.id IN (
        SELECT products.id
        FROM products
        LEFT JOIN product_stock ON products.id = product_stock.product_id
        WHERE 1=1 
          AND products.gender = $1 
          AND products.category = $2 `;

    const queryParams: string[] = [gender, category];

    const dataToExec = [
      {filterArray: sizesArray, filterParameter: "product_stock.size"},
      {filterArray: colorsArray, filterParameter: "products.color"},
      {filterArray: brandsArray, filterParameter: "products.brand"},
      {filterArray: materialsArray, filterParameter: "products.material"},
    ];

    const override = joinSqlQuery(query, [...queryParams], [...dataToExec]);

    const result = await client.query(override.query, override.queryParams);

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
