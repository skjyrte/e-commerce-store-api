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

export { processSQLRows, createResponse };
