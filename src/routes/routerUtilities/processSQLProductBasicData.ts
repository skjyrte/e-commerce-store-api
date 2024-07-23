import Decimal from "decimal.js";

function isDecimal(obj: unknown): obj is Decimal {
  return obj instanceof Decimal;
}

function isProductBasicDataDatabase(
  obj: unknown
): obj is ProductBasicDataDatabase {
  if (typeof obj !== "object" || obj === null) return false;

  //NOTE - Type casting inside typeguard for clarity
  const o = obj as ProductBasicDataDatabase;

  return (
    typeof o.id === "string" &&
    typeof o.brand === "string" &&
    typeof o.model === "string" &&
    typeof o.gender === "string" &&
    typeof o.category === "string" &&
    typeof o.material === "string" &&
    typeof o.season === "string" &&
    typeof o.short_description === "string" &&
    typeof o.description === "string" &&
    Array.isArray(o.features) &&
    o.features.every((f: unknown) => typeof f === "string") &&
    isDecimal(o.price) &&
    isDecimal(o.initial_price) &&
    typeof o.rating_reviews === "number" &&
    isDecimal(o.rating_value) &&
    typeof o.thumbnail === "string" &&
    typeof o.color === "string" &&
    typeof o.size === "string" &&
    typeof o.count === "number"
  );
}

function isProductBasicDataDatabaseArray(
  arr: unknown[]
): arr is ProductBasicDataDatabase[] {
  return arr.every(isProductBasicDataDatabase);
}

function processSQLProducts(rows: unknown): ProductBasicDataResponse[] {
  if (!Array.isArray(rows) || !isProductBasicDataDatabaseArray(rows)) {
    throw new Error(
      "Invalid input: rows must be an array of ProductBasicDataDatabase objects"
    );
  }

  const createCommonDataObject = (
    products: ProductBasicDataDatabase[]
  ): ProductBasicDataResponse => ({
    id: products[0].id,
    brand: products[0].brand,
    model: products[0].model,
    gender: products[0].gender,
    category: products[0].category,
    material: products[0].material,
    season: products[0].season,
    short_description: products[0].short_description,
    description: products[0].description,
    features: products[0].features,
    price: products[0].price,
    initial_price: products[0].initial_price,
    rating_reviews: products[0].rating_reviews,
    rating_value: products[0].rating_value,
    thumbnail: products[0].thumbnail,
    color: products[0].color,
    stock_array: Array.from(
      new Map(
        products.map((item) => [
          item.size,
          {size: item.size, count: item.count},
        ])
      ).values()
    ),
  });

  function processSQLRows(
    rows: ProductBasicDataDatabase[]
  ): ProductBasicDataResponse[] {
    return [...new Set(rows.map((product) => product.id))]
      .map((uniqueId) => rows.filter((row) => row.id === uniqueId))
      .map((sortedProducts) => createCommonDataObject(sortedProducts));
  }

  return processSQLRows(rows);
}

export default processSQLProducts;
