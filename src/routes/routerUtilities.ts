import express, { Request, Response } from "express";
import pool from "../db.js";

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
  color: string;
}

interface ProductWithStockAndImages extends Product {
  size?: string;
  count?: number;
  image_url?: string;
}

const mergeCommonDataIntoObject = (product: ProductWithStockAndImages[]) => ({
  ...product[0],
  size: undefined,
  count: undefined,
  stock: Array.from(
    new Map(
      product.map((item) => [item.size, { size: item.size, count: item.count }])
    ).values()
  ),
  images: [...new Set(product.map((row) => row.image_url))],
});

function processSQLRows(rows: Product[]) {
  return [...new Set(rows.map((product) => product.id))]
    .map((uniqueId) => rows.filter((row) => row.id === uniqueId))
    .map((sortedProducts) => mergeCommonDataIntoObject(sortedProducts));
}

function createResponse(
  success: boolean,
  message: string,
  data?: ProductWithStockAndImages[]
) {
  if (data === undefined) {
    return { success: success, message: message };
  } else {
    return { success: success, message: message, data: data };
  }
}

async function handleGetRequest(query: string, params: any[], res: Response) {
  /* FOR FORTHER USE */
  const client = await pool.connect();
  try {
    const result = await client.query(query, params);

    if (result.rows.length > 0) {
      const processedResult = processSQLRows(result.rows);
      res
        .status(200)
        .send(createResponse(true, "Request successful", processedResult));
    } else {
      res.status(404).send(createResponse(false, "No data found"));
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send(createResponse(false, "Internal server error"));
  } finally {
    client.release();
  }
}

const processVariants = (variants: string) => {
  /* brand_color__size */
  const brand: string[] = [];
  const color: string[] = [];
  const size: string[] = [];

  /* brand */
  if (variants[0] !== "_") {
    if (variants.includes("_") && variants.includes("__")) {
      variants
        .slice(
          0,
          variants.indexOf("__") < variants.indexOf("_")
            ? variants.indexOf("__")
            : variants.indexOf("_")
        )
        .split(".")
        .forEach((b) => {
          if (b !== "") {
            brand.push(b);
          }
        });
    } else if (variants.includes("_")) {
      variants
        .slice(0, variants.indexOf("_"))
        .split(".")
        .forEach((b) => {
          if (b !== "") {
            brand.push(b);
          }
        });
    } else if (variants.includes("__")) {
      variants
        .slice(0, variants.indexOf("__"))
        .split(".")
        .forEach((b) => {
          if (b !== "") {
            brand.push(b);
          }
        });
    } else {
      variants.split(".").forEach((b) => {
        if (b !== "") {
          brand.push(b);
        }
      });
    }
  }
  /* color */
  if (variants.includes("_")) {
    if (variants.includes("__")) {
      variants
        .slice(variants.indexOf("_") + 1, variants.indexOf("__"))
        .split(".")
        .forEach((c) => {
          if (c !== "") {
            color.push(c);
          }
        });
    } else {
      variants
        .slice(variants.indexOf("_") + 1)
        .split(".")
        .forEach((c) => {
          if (c !== "") {
            color.push(c);
          }
        });
    }
  }
  /* size */
  if (variants.includes("__")) {
    variants
      .slice(variants.indexOf("__size-") + 7)
      .split(".")
      .forEach((s) => size.push(s));
  }

  console.log({ brandsArray: brand, colorsArray: color, sizesArray: size });
  return { brandsArray: brand, colorsArray: color, sizesArray: size };
};

export { processSQLRows, createResponse, handleGetRequest, processVariants };
