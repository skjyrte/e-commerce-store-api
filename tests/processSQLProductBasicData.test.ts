import {describe, expect} from "@jest/globals";
import processSQLProductBasicData from "../src/routes/routerUtilities/processSQLProductBasicData";
import Decimal from "decimal.js";

describe("processSQLProductBasicData", () => {
  it("should process SQL rows and return the expected response", () => {
    const inputRows: ProductBasicDataDatabase[] = [
      {
        id: "a1524b05-64a6-4d2d-9d6b-6ab57b804923",
        brand: "Zalton",
        model: "AirFlex 5000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "all_season",
        short_description: "Versatile Running Shoes",
        description:
          "The Zalton AirFlex 5000 delivers the same responsive cushioning that runners love.",
        features: ["Responsive cushioning", "Breathable mesh upper"],
        price: new Decimal("129.99"),
        initial_price: new Decimal("149.99"),
        rating_reviews: 120,
        rating_value: new Decimal("4.5"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/buty-meskie-dunk-low-retro-wwlDHh.png",
        color: "white",
        size: "40",
        count: 20,
      },
      {
        id: "a1524b05-64a6-4d2d-9d6b-6ab57b804923",
        brand: "Zalton",
        model: "AirFlex 5000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "all_season",
        short_description: "Versatile Running Shoes",
        description:
          "The Zalton AirFlex 5000 delivers the same responsive cushioning that runners love.",
        features: ["Responsive cushioning", "Breathable mesh upper"],
        price: new Decimal("129.99"),
        initial_price: new Decimal("149.99"),
        rating_reviews: 120,
        rating_value: new Decimal("4.5"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/buty-meskie-dunk-low-retro-wwlDHh.png",
        color: "white",
        size: "41",
        count: 15,
      },
      {
        id: "a1524b05-64a6-4d2d-9d6b-6ab57b804923",
        brand: "Zalton",
        model: "AirFlex 5000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "all_season",
        short_description: "Versatile Running Shoes",
        description:
          "The Zalton AirFlex 5000 delivers the same responsive cushioning that runners love.",
        features: ["Responsive cushioning", "Breathable mesh upper"],
        price: new Decimal("129.99"),
        initial_price: new Decimal("149.99"),
        rating_reviews: 120,
        rating_value: new Decimal("4.5"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/buty-meskie-dunk-low-retro-wwlDHh.png",
        color: "white",
        size: "42",
        count: 10,
      },
      {
        id: "a1524b05-64a6-4d2d-9d6b-6ab57b804923",
        brand: "Zalton",
        model: "AirFlex 5000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "all_season",
        short_description: "Versatile Running Shoes",
        description:
          "The Zalton AirFlex 5000 delivers the same responsive cushioning that runners love.",
        features: ["Responsive cushioning", "Breathable mesh upper"],
        price: new Decimal("129.99"),
        initial_price: new Decimal("149.99"),
        rating_reviews: 120,
        rating_value: new Decimal("4.5"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/buty-meskie-dunk-low-retro-wwlDHh.png",
        color: "white",
        size: "43",
        count: 12,
      },
      {
        id: "a1524b05-64a6-4d2d-9d6b-6ab57b804923",
        brand: "Zalton",
        model: "AirFlex 5000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "all_season",
        short_description: "Versatile Running Shoes",
        description:
          "The Zalton AirFlex 5000 delivers the same responsive cushioning that runners love.",
        features: ["Responsive cushioning", "Breathable mesh upper"],
        price: new Decimal("129.99"),
        initial_price: new Decimal("149.99"),
        rating_reviews: 120,
        rating_value: new Decimal("4.5"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/buty-meskie-dunk-low-retro-wwlDHh.png",
        color: "white",
        size: "44",
        count: 8,
      },
      {
        id: "c8837c8e-3aeb-4483-81c4-233127a2b58d",
        brand: "UrbanStep",
        model: "AirStride 3000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "winter",
        short_description: "Versatile Running Shoes",
        description:
          "The UrbanStep AirStride 3000 offers a balanced mix of cushioning and flexibility for runners.",
        features: ["Lightweight mesh upper", "EVA sockliner"],
        price: new Decimal("70.00"),
        initial_price: new Decimal("79.99"),
        rating_reviews: 55,
        rating_value: new Decimal("4.4"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f228c7a1-177d-483b-ba52-a5e41f43fbd2/buty-meskie-air-max-plus-utility-HkwSWp.png",
        color: "black",
        size: "39",
        count: 14,
      },
      {
        id: "c8837c8e-3aeb-4483-81c4-233127a2b58d",
        brand: "UrbanStep",
        model: "AirStride 3000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "winter",
        short_description: "Versatile Running Shoes",
        description:
          "The UrbanStep AirStride 3000 offers a balanced mix of cushioning and flexibility for runners.",
        features: ["Lightweight mesh upper", "EVA sockliner"],
        price: new Decimal("70.00"),
        initial_price: new Decimal("79.99"),
        rating_reviews: 55,
        rating_value: new Decimal("4.4"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f228c7a1-177d-483b-ba52-a5e41f43fbd2/buty-meskie-air-max-plus-utility-HkwSWp.png",
        color: "black",
        size: "40",
        count: 20,
      },
      {
        id: "c8837c8e-3aeb-4483-81c4-233127a2b58d",
        brand: "UrbanStep",
        model: "AirStride 3000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "winter",
        short_description: "Versatile Running Shoes",
        description:
          "The UrbanStep AirStride 3000 offers a balanced mix of cushioning and flexibility for runners.",
        features: ["Lightweight mesh upper", "EVA sockliner"],
        price: new Decimal("70.00"),
        initial_price: new Decimal("79.99"),
        rating_reviews: 55,
        rating_value: new Decimal("4.4"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f228c7a1-177d-483b-ba52-a5e41f43fbd2/buty-meskie-air-max-plus-utility-HkwSWp.png",
        color: "black",
        size: "41",
        count: 15,
      },
      {
        id: "c8837c8e-3aeb-4483-81c4-233127a2b58d",
        brand: "UrbanStep",
        model: "AirStride 3000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "winter",
        short_description: "Versatile Running Shoes",
        description:
          "The UrbanStep AirStride 3000 offers a balanced mix of cushioning and flexibility for runners.",
        features: ["Lightweight mesh upper", "EVA sockliner"],
        price: new Decimal("70.00"),
        initial_price: new Decimal("79.99"),
        rating_reviews: 55,
        rating_value: new Decimal("4.4"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f228c7a1-177d-483b-ba52-a5e41f43fbd2/buty-meskie-air-max-plus-utility-HkwSWp.png",
        color: "black",
        size: "42",
        count: 10,
      },
      {
        id: "c8837c8e-3aeb-4483-81c4-233127a2b58d",
        brand: "UrbanStep",
        model: "AirStride 3000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "winter",
        short_description: "Versatile Running Shoes",
        description:
          "The UrbanStep AirStride 3000 offers a balanced mix of cushioning and flexibility for runners.",
        features: ["Lightweight mesh upper", "EVA sockliner"],
        price: new Decimal("70.00"),
        initial_price: new Decimal("79.99"),
        rating_reviews: 55,
        rating_value: new Decimal("4.4"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f228c7a1-177d-483b-ba52-a5e41f43fbd2/buty-meskie-air-max-plus-utility-HkwSWp.png",
        color: "black",
        size: "43",
        count: 12,
      },
    ];

    const expectedOutput: ProductBasicDataResponse[] = [
      {
        id: "a1524b05-64a6-4d2d-9d6b-6ab57b804923",
        brand: "Zalton",
        model: "AirFlex 5000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "all_season",
        short_description: "Versatile Running Shoes",
        description:
          "The Zalton AirFlex 5000 delivers the same responsive cushioning that runners love.",
        features: ["Responsive cushioning", "Breathable mesh upper"],
        price: new Decimal("129.99"),
        initial_price: new Decimal("149.99"),
        rating_reviews: 120,
        rating_value: new Decimal("4.5"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/buty-meskie-dunk-low-retro-wwlDHh.png",
        color: "white",
        stock_array: [
          {size: "40", count: 20},
          {size: "41", count: 15},
          {size: "42", count: 10},
          {size: "43", count: 12},
          {size: "44", count: 8},
        ],
      },
      {
        id: "c8837c8e-3aeb-4483-81c4-233127a2b58d",
        brand: "UrbanStep",
        model: "AirStride 3000",
        gender: "men",
        category: "sneakers",
        material: "mesh",
        season: "winter",
        short_description: "Versatile Running Shoes",
        description:
          "The UrbanStep AirStride 3000 offers a balanced mix of cushioning and flexibility for runners.",
        features: ["Lightweight mesh upper", "EVA sockliner"],
        price: new Decimal("70.00"),
        initial_price: new Decimal("79.99"),
        rating_reviews: 55,
        rating_value: new Decimal("4.4"),
        thumbnail:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f228c7a1-177d-483b-ba52-a5e41f43fbd2/buty-meskie-air-max-plus-utility-HkwSWp.png",
        color: "black",
        stock_array: [
          {size: "39", count: 14},
          {size: "40", count: 20},
          {size: "41", count: 15},
          {size: "42", count: 10},
          {size: "43", count: 12},
        ],
      },
    ];

    const result = processSQLProductBasicData(inputRows);

    expect(result).toEqual(expectedOutput);
  });

  it("should handle empty input rows", () => {
    const inputRows: ProductBasicDataDatabase[] = [];
    const expectedOutput: ProductBasicDataResponse[] = [];

    const result = processSQLProductBasicData(inputRows);

    expect(result).toEqual(expectedOutput);
  });
});
