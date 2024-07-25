import express from "express";
import pool from "../db.js";
import processSQLProductBasicData from "./routerUtilities/processSQLProductBasicData.js";
import createResponse from "./routerUtilities/createResponse.js";
import {processFilterPath} from "./routerUtilities/processFilterPath.js";
import {processQueryParams} from "./routerUtilities/processQueryParams.js";
import {joinSqlQuery} from "./routerUtilities/joinSqlQuery.js";

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
  const {material, season} = req.query;

  try {
    const parsedPath = processFilterPath(variants);
    if (!parsedPath) {
      throw new Error("Error during processing filter path");
    }
    const {brandsArray, colorsArray, sizesArray} = parsedPath;

    const parsedQuery = processQueryParams({
      material: material ? material.toString() : material,
      season: season ? season.toString() : season,
    });
    if (!parsedQuery) {
      throw new Error("Error during processing query params");
    }
    const {materialsArray, seasonsArray} = parsedQuery;

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

    const sqlParams: string[] = [gender, category];

    const dataToExec = [
      {filterArray: sizesArray, filterParameter: "product_stock.size"},
      {filterArray: colorsArray, filterParameter: "products.color"},
      {filterArray: brandsArray, filterParameter: "products.brand"},
      {filterArray: materialsArray, filterParameter: "products.material"},
      {filterArray: seasonsArray, filterParameter: "products.season"},
    ];

    const updatedSqlConfig = joinSqlQuery(
      query,
      [...sqlParams],
      [...dataToExec]
    );

    const fetchedDataDatabase = await client.query(
      updatedSqlConfig.query,
      updatedSqlConfig.queryParams
    );

    if (fetchedDataDatabase.rows.length > 0) {
      const result = processSQLProductBasicData(fetchedDataDatabase.rows);
      res.status(200).send(createResponse(true, "GET Request Called", result));
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
