import express from "express";
import createResponse from "./createResponse.js";

async function executeQuery(
  res: express.Response,
  //eslint-disable-next-line
  query: any,
  successMessage: string,
  notFoundMessage: string,
  dbProcessor: (
    // eslint-disable-next-line no-unused-vars
    rows: unknown
  ) => ProductBasicDataResponse[] | ProductExtraDataResponse[]
) {
  /* const client = await pool.connect(); */
  try {
    /*  const result = await client.query(query, params); */
    const rows = await query;
    /*    console.log(rows); */
    if (rows.length > 0) {
      const processedResult = dbProcessor(rows);
      console.log(processedResult);
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
    /* client.release(); */
  }
}

export default executeQuery;
