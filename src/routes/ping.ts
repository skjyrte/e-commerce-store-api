import express from "express";
import knexDb from "../knexDb.js";
import createResponse from "./routerUtilities/createResponse.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const query = await knexDb("products").first();

    if (!query) {
      return res
        .status(500)
        .send(createResponse(false, "No connection to database"));
    }

    res.status(200).send(createResponse(true, "Connection OK"));
  } catch (e) {
    console.error(e);
  }
});

export default router;
