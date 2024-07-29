import Decimal from "decimal.js";

const isDecimal = (obj: unknown): obj is Decimal => {
  return obj instanceof Decimal;
};

const isProductExtraDataDatabaseArray = (
  arr: unknown[]
): arr is ProductExtraDataDatabase[] => {
  return arr.every(isProductExtraDataDatabase);
};

const isProductExtraDataDatabase = (
  obj: unknown
): obj is ProductExtraDataDatabase => {
  if (typeof obj !== "object" || obj === null) return false;
  //NOTE - Type casting inside typeguard for clarity
  const o = obj as ProductExtraDataDatabase;
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
    typeof o.count === "number" &&
    typeof o.image_url === "string"
  );
};

const createCommonDataObject = (
  products: ProductExtraDataDatabase[]
): ProductExtraDataResponse => ({
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
      products.map((item) => [item.size, {size: item.size, count: item.count}])
    ).values()
  ),
  image_url_array: [...new Set(products.map((row) => row.image_url))],
});

const processSQLRows = (rows: ProductExtraDataDatabase[]) => {
  return [...new Set(rows.map((product) => product.id))]
    .map((uniqueId) => rows.filter((row) => row.id === uniqueId))
    .map((sortedProducts) => createCommonDataObject(sortedProducts));
};

/**
 * Processes an array of raw SQL rows into an array of ProductExtraDataResponse objects.
 *
 * @param rows - The raw SQL rows to process.
 * @returns An array of ProductExtraDataResponse objects.
 * @throws Will throw an error if the input is not an array of ProductExtraDataDatabase objects.
 */
function processSQLProductExtraData(rows: unknown): ProductExtraDataResponse[] {
  if (!Array.isArray(rows) || !isProductExtraDataDatabaseArray(rows)) {
    throw new Error(
      "Invalid input: rows must be an array of ProductExtraDataDatabase objects"
    );
  } else return processSQLRows(rows);
}

export default processSQLProductExtraData;
