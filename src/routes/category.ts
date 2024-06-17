import express from "express";
import pool from "../db.js";

const router = express.Router();

interface Product {
  id: string;
  brand: string;
  model: string;
  gender: string;
  category: string;
  material: string;
  season: string;
  shortDescription: string;
  description: string;
  features: string[];
  price: number;
  initialPrice: number;
  ratingReviews: number;
  ratingValue: number;
  thumbnail: string;
}

interface ProductWithStock extends Product {
  size?: string;
  count?: number;
  image_url?: string;
}

router.get("/:category", async (req, res) => {
  const client = await pool.connect();
  const { category } = req.params;
  console.log("category input:");
  console.log(category);
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
        products.category = $1`,
      [category]
    );

    if (result.rows.length > 0) {
      const processProduct = (product: ProductWithStock[]) => ({
        ...product[0],
        size: undefined,
        count: undefined,
        stock: Array.from(
          new Map(
            product.map((item) => [
              item.size,
              { size: item.size, count: item.count },
            ])
          ).values()
        ),
        images: [...new Set(product.map((row) => row.image_url))],
      });

      const uniqueProducts = [
        ...new Set(result.rows.map((product) => product.id)),
      ]
        .map((uniqueId) => result.rows.filter((row) => row.id === uniqueId))
        .map((sortedProducts) => processProduct(sortedProducts));

      res.status(200).json(uniqueProducts);
    } else {
      res.status(404).json({ success: false, message: "Category not found" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  } finally {
    client.release();
  }
});

export default router;
