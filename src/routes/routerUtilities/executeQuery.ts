import express from "express";
import createResponse from "./createResponse.js";
import {Knex} from "knex";

async function executeQuery(
  res: express.Response,
  query: Knex.QueryBuilder,
  successMessage: string,
  notFoundMessage: string,
  dbProcessor: (
    //eslint-disable-next-line no-unused-vars
    rows: unknown
  ) => ProductBasicDataResponse[] | ProductExtraDataResponse[]
) {
  try {
    const rows = await query;
    if (rows.length > 0) {
      const processedResult = dbProcessor(rows);
      res
        .status(200)
        .send(createResponse(true, successMessage, processedResult));
    } else {
      res.status(404).send(createResponse(false, notFoundMessage));
    }
  } catch (e) {
    if (
      e instanceof Error &&
      e.message.includes("invalid input syntax for type uuid")
    ) {
      console.error("Invalid UUID:", e);
      res.status(404).send(createResponse(false, "Product not found"));
    } else {
      console.error("Error executing query", e);
      res.status(500).send(createResponse(false, "Internal server error"));
    }
  }
}

export default executeQuery;
