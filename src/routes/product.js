import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM users");
    client.release();
    console.log(result.rows);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error executing query", error.stack);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

export default router;
