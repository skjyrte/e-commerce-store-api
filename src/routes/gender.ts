import express from "express";
import processSQLProductBasicData from "./routerUtilities/processSQLProductBasicData.js";
import createResponse from "./routerUtilities/createResponse.js";
import processFilterPath from "./routerUtilities/processFilterPath.js";
import processQueryParams from "./routerUtilities/processQueryParams.js";
/* import joinSqlQuery from "./routerUtilities/joinSqlQuery.js"; */
import executeQuery from "./routerUtilities/executeQuery.js";
import db from "../db.js";

const router = express.Router();

router.get("/:gender", async (req, res) => {
  const {gender} = req.params;
  const query = db("products")
    .select("products.*", "product_stock.size", "product_stock.count")
    .leftJoin("product_stock", "products.id", "product_stock.product_id")
    .where("products.gender", gender);

  await executeQuery(
    res,
    query,
    "GET Request Called",
    "Category not found",
    processSQLProductBasicData
  );
});

router.get("/:gender/category/:category", async (req, res) => {
  const {gender, category} = req.params;
  const query = db("products")
    .select("products.*", "product_stock.size", "product_stock.count")
    .leftJoin("product_stock", "products.id", "product_stock.product_id")
    .where("products.gender", gender)
    .andWhere("products.category", category);

  await executeQuery(
    res,
    query,
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

    const filterSets = [
      {filterArray: sizesArray, filterParameter: "product_stock.size"},
      {filterArray: colorsArray, filterParameter: "products.color"},
      {filterArray: brandsArray, filterParameter: "products.brand"},
      {filterArray: materialsArray, filterParameter: "products.material"},
      {filterArray: seasonsArray, filterParameter: "products.season"},
    ];

    const baseQuery = db("products")
      .select(
        "products.*",
        "product_stock.size",
        "product_stock.count",
        "product_images.image_url"
      )
      .leftJoin("product_stock", "products.id", "product_stock.product_id")
      .leftJoin("product_images", "products.id", "product_images.product_id")
      .where("products.gender", gender)
      .andWhere("products.category", category);

    const applyFilterSets = (query, filterSets, index = 0) => {
      if (index >= filterSets.length) return query;
      const {filterArray, filterParameter} = filterSets[index];
      return query
        .andWhere((builder) => {
          builder.where((builder) => {
            filterArray.forEach((filterValue, index) => {
              if (index === 0) {
                builder.where(filterParameter, filterValue);
              } else {
                builder.orWhere(filterParameter, filterValue);
              }
            });
          });
        })
        .modify((builder) => applyFilterSets(builder, filterSets, index + 1));
    };

    const queryWithFilters = applyFilterSets(baseQuery, filterSets);

    await executeQuery(
      res,
      queryWithFilters,
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
