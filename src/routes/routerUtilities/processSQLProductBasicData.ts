import Decimal from "decimal.js";

const isDecimal = (obj: unknown): obj is Decimal => {
  return obj instanceof Decimal;
};

const isProductBasicDataDatabaseArray = (
  arr: unknown[]
): arr is ProductBasicDataDatabase[] => {
  return arr.every(isProductBasicDataDatabase);
};

const isProductBasicDataDatabase = (
  obj: unknown
): obj is ProductBasicDataDatabase => {
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
    isDecimal(o.price) &&
    isDecimal(o.initial_price) &&
    typeof o.thumbnail === "string" &&
    typeof o.color === "string" &&
    typeof o.size === "string" &&
    typeof o.count === "number"
  );
};

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
  price: products[0].price,
  initial_price: products[0].initial_price,
  thumbnail: products[0].thumbnail,
  color: products[0].color,
  stock_array: Array.from(
    new Map(
      products.map((item) => [item.size, {size: item.size, count: item.count}])
    ).values()
  ),
});

const processSQLRows = (
  rows: ProductBasicDataDatabase[]
): ProductBasicDataResponse[] => {
  return [...new Set(rows.map((product) => product.id))]
    .map((uniqueId) => rows.filter((row) => row.id === uniqueId))
    .map((sortedProducts) => createCommonDataObject(sortedProducts));
};

/**
 * Processes an array of raw SQL rows into an array of ProductBasicDataResponse objects.
 *
 * @param rows - The raw SQL rows to process.
 * @returns An array of ProductBasicDataResponse objects.
 * @throws Will throw an error if the input is not an array of ProductBasicDataDatabase objects.
 */
function processSQLProductBasicData(rows: unknown): ProductBasicDataResponse[] {
  if (!Array.isArray(rows) || !isProductBasicDataDatabaseArray(rows)) {
    throw new Error(
      "Invalid input: rows must be an array of ProductBasicDataDatabase objects"
    );
  } else return processSQLRows(rows);
}

export default processSQLProductBasicData;
