type Decimal = import("decimal.js").Decimal; //NOTE - necessary syntax for importing external types into .d.ts

//SECTION - database objects types
interface ProductBasicDataDatabase {
  id: string;
  brand: string;
  model: string;
  gender: string;
  category: string;
  material: string;
  season: string;
  price: Decimal;
  initial_price: Decimal;
  thumbnail: string;
  color: string;
  size: string;
  count: number;
}

interface ProductExtraDataDatabase extends ProductBasicDataDatabase {
  short_description: string;
  description: string;
  features: string[];
  rating_reviews: number;
  rating_value: Decimal;
  image_url: string;
}

//SECTION - data transfer object types
interface ProductBasicDataResponse {
  id: string;
  brand: string;
  model: string;
  gender: string;
  category: string;
  material: string;
  season: string;
  price: Decimal;
  initial_price: Decimal;
  thumbnail: string;
  color: string;
  stock_array: StockResponse[];
}

interface StockResponse {
  size: string;
  count: number;
}

interface ProductExtraDataResponse extends ProductBasicDataResponse {
  short_description: string;
  description: string;
  features: string[];
  rating_reviews: number;
  rating_value: Decimal;
  image_url_array: string[];
}
