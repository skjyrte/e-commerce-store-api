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
  short_description: string; //TODO - key not necessary for catagory view
  description: string; //TODO - key not necessary for catagory view
  features: string[]; //TODO - key not necessary for catagory view
  price: Decimal;
  initial_price: Decimal;
  rating_reviews: number; //TODO - key not necessary for catagory view
  rating_value: Decimal; //TODO - key not necessary for catagory view
  thumbnail: string;
  color: string;
  size: string;
  count: number;
}

interface ProductExtraDataDatabase extends ProductBasicDataDatabase {
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
  short_description: string; //TODO - key not necessary for catagory view
  description: string; //TODO - key not necessary for catagory view
  features: string[]; //TODO - key not necessary for catagory view
  price: Decimal;
  initial_price: Decimal;
  rating_reviews: number; //TODO - key not necessary for catagory view
  rating_value: Decimal; //TODO - key not necessary for catagory view
  thumbnail: string;
  color: string;
  stock_array: StockResponse[];
}

interface StockResponse {
  size: string;
  count: number;
}

interface ProductExtraDataResponse extends ProductBasicDataResponse {
  image_url_array: string[];
}
