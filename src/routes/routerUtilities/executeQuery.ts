import express from "express";
import createResponse from "./createResponse";

import pool from "../../db.js";

async function executeQuery(
  res: express.Response,
  query: string,
  params: (string | number)[],
  successMessage: string,
  notFoundMessage: string,
  dbProcessor: (
    // eslint-disable-next-line no-unused-vars
    rows: unknown
  ) => ProductBasicDataResponse[] | ProductExtraDataResponse[]
) {
  const client = await pool.connect();
  try {
    const result = await client.query(query, params);
    if (result.rows.length > 0) {
      const processedResult = dbProcessor(result.rows);
      res
        .status(200)
        .send(createResponse(true, successMessage, processedResult));
    } else {
      res.status(404).send(createResponse(false, notFoundMessage));
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send(createResponse(false, "Internal server error"));
  } finally {
    client.release();
  }
}

export default executeQuery;
