import express from "express";
import processSQLProductBasicData from "./routerUtilities/processSQLProductBasicData.js";
import createResponse from "./routerUtilities/createResponse.js";
import processFilterPath from "./routerUtilities/processFilterPath.js";
import processQueryParams from "./routerUtilities/processQueryParams.js";
import executeQuery from "./routerUtilities/executeQuery.js";
import knexDb from "../knexDb.js";
import {Knex} from "knex";

const router = express.Router();

interface FilterSet {
  filterArray: string[];
  filterParameter: string;
}

//NOTE - optional gender is intended to be used as "ALL" gender on client.
router.get("/:gender?", async (req, res) => {
  const {gender} = req.params;
  try {
    const query = knexDb("products")
      .select(
        "products.id",
        "products.brand",
        "products.model",
        "products.gender",
        "products.category",
        "products.material",
        "products.season",
        "products.price",
        "products.initial_price",
        "products.thumbnail",
        "products.color",
        "product_stock.size",
        "product_stock.count"
      )
      .leftJoin("product_stock", "products.id", "product_stock.product_id");

    if (gender) {
      query.where("products.gender", gender);
    }

    await executeQuery(
      res,
      query,
      "GET Request Called",
      "Category not found",
      processSQLProductBasicData
    );
  } catch (e) {
    console.error("Error on route", e);
    res.status(500).send(createResponse(false, "Internal server error"));
  }
});

router.get("/:gender?/category/:category", async (req, res) => {
  const {gender, category} = req.params;
  try {
    const query = knexDb("products")
      .select(
        "products.id",
        "products.brand",
        "products.model",
        "products.gender",
        "products.category",
        "products.material",
        "products.season",
        "products.price",
        "products.initial_price",
        "products.thumbnail",
        "products.color",
        "product_stock.size",
        "product_stock.count"
      )
      .leftJoin("product_stock", "products.id", "product_stock.product_id")
      .where("products.category", category);

    if (gender) {
      query.andWhere("products.gender", gender);
    }
    await executeQuery(
      res,
      query,
      "GET Request Called",
      "Category not found",
      processSQLProductBasicData
    );
  } catch (e) {
    console.error("Error on route", e);
    res.status(500).send(createResponse(false, "Internal server error"));
  }
});

router.get("/:gender?/category/:category/:variants", async (req, res) => {
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

    const filterSets: FilterSet[] = [
      {filterArray: sizesArray, filterParameter: "product_stock.size"},
      {filterArray: colorsArray, filterParameter: "products.color"},
      {filterArray: brandsArray, filterParameter: "products.brand"},
      {filterArray: materialsArray, filterParameter: "products.material"},
      {filterArray: seasonsArray, filterParameter: "products.season"},
    ];

    const subQuery = knexDb("products")
      .select("products.id")
      .leftJoin("product_stock", "products.id", "product_stock.product_id")
      .where("products.category", category);

    if (gender) {
      subQuery.andWhere("products.gender", gender);
    }

    const applyFilterSets = (
      query: Knex.QueryBuilder,
      filterSets: FilterSet[],
      index = 0
    ) => {
      if (index >= filterSets.length) return query;
      const {filterArray, filterParameter} = filterSets[index];
      return query
        .andWhere((builder: Knex.QueryBuilder) => {
          builder.where((builder: Knex.QueryBuilder) => {
            filterArray.forEach((filterValue: string, index: number) => {
              if (index === 0) {
                builder.where(filterParameter, filterValue);
              } else {
                builder.orWhere(filterParameter, filterValue);
              }
            });
          });
        })
        .modify((builder: Knex.QueryBuilder) =>
          applyFilterSets(builder, filterSets, index + 1)
        );
    };

    const subQueryWithFilters = applyFilterSets(subQuery, filterSets);

    const queryWithFilters = knexDb("products")
      .select(
        "products.id",
        "products.brand",
        "products.model",
        "products.gender",
        "products.category",
        "products.material",
        "products.season",
        "products.price",
        "products.initial_price",
        "products.thumbnail",
        "products.color",
        "product_stock.size",
        "product_stock.count"
      )
      .leftJoin("product_stock", "products.id", "product_stock.product_id")
      .whereIn("products.id", subQueryWithFilters);

    await executeQuery(
      res,
      queryWithFilters,
      "GET Request Called",
      "Category not found",
      processSQLProductBasicData
    );
  } catch (e) {
    console.error("Error on route", e);
    res.status(500).send(createResponse(false, "Internal server error"));
  }
});

export default router;
