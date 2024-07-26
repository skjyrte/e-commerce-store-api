import express from "express";
import createResponse from "./createResponse.js";

import pool from "../../db.js";

/**
 * Executes a SQL query and sends the result as an HTTP response.
 *
 * @param res - The Express response object.
 * @param query - The SQL query string to be executed.
 * @param params - An array of parameters to be passed to the SQL query.
 * @param successMessage - A message to be sent in the response on successful execution.
 * @param notFoundMessage - A message to be sent in the response if no records are found.
 * @param dbProcessor - A function to process the database rows before sending them in the response.
 *
 * @returns void
 *
 * This function connects to the database, executes the given query with the provided parameters,
 * and processes the results using the specified dbProcessor function. It then sends an appropriate
 * response based on the query outcome.
 *
 * - On success, it sends a 200 status code with the processed data.
 * - If no records are found, it sends a 404 status code with a not found message.
 * - On error, it sends a 500 status code with an internal server error message.
 */
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
