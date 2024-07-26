import express from "express";
import processSQLProductBasicData from "./routerUtilities/processSQLProductBasicData.js";
import createResponse from "./routerUtilities/createResponse.js";
import processFilterPath from "./routerUtilities/processFilterPath.js";
import processQueryParams from "./routerUtilities/processQueryParams.js";
import joinSqlQuery from "./routerUtilities/joinSqlQuery.js";
import executeQuery from "./routerUtilities/executeQuery.js";

const router = express.Router();

router.get("/:gender", async (req, res) => {
  const {gender} = req.params;
  const query = `
    SELECT 
      products.*, 
      product_stock.size, 
      product_stock.count
    FROM 
      products
    LEFT JOIN 
      product_stock ON products.id = product_stock.product_id
    WHERE 
      products.gender = $1`;
  await executeQuery(
    res,
    query,
    [gender],
    "GET Request Called",
    "Category not found",
    processSQLProductBasicData
  );
});

router.get("/:gender/category/:category", async (req, res) => {
  const {gender, category} = req.params;
  const query = `
    SELECT 
      products.*, 
      product_stock.size, 
      product_stock.count
    FROM 
      products
    LEFT JOIN 
      product_stock ON products.id = product_stock.product_id
    WHERE 
      products.gender = $1 AND products.category = $2`;
  await executeQuery(
    res,
    query,
    [gender, category],
    "GET Request Called",
    "Category not found",
    processSQLProductBasicData
  );
});

router.get("/:gender/category/:category/:variants", async (req, res) => {
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
          AND products.category = $2`;

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

    await executeQuery(
      res,
      updatedSqlConfig.query,
      updatedSqlConfig.queryParams,
      "GET Request Called",
      "Category not found",
      processSQLProductBasicData
    );
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send(createResponse(false, "Internal server error"));
  }
});

export default router;
