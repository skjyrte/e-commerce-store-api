import {describe, expect} from "@jest/globals";
import joinSqlQuery from "../src/routes/routerUtilities/joinSqlQuery";

describe("processFilterPath: ", () => {
  it("basic test", () => {
    const baseSql = `
    SELECT 
      products.*, 
      product_stock.size, 
      product_stock.count, 
      product_images.image_url
    FROM 
      products
    LEFT JOIN 
      product_stock ON products.id = product_stock.product_id
    LEFT JOIN 
      product_images ON products.id = product_images.product_id
      WHERE products.id IN (
      SELECT DISTINCT products.id
      FROM products
      LEFT JOIN product_stock ON products.id = product_stock.product_id
      WHERE 1=1 AND products.gender = $1 AND products.category = $2`;

    const queryParams: string[] = ["gender", "category"];

    const sizesArray = ["40", "41", "46", "48"];
    const colorsArray = ["red", "white", "black"];
    const brandsArray = ["Zalton", "UrbanStep"];
    const materialsArray = ["mesh"];
    const dataToExec = [
      {filterArray: sizesArray, filterParameter: "product_stock.size"},
      {filterArray: colorsArray, filterParameter: "products.color"},
      {filterArray: brandsArray, filterParameter: "products.brand"},
      {filterArray: materialsArray, filterParameter: "products.material"},
    ];

    const result = joinSqlQuery(baseSql, [...queryParams], [...dataToExec]);

    const expectedOutput = {
      query:
        "\n" +
        "    SELECT \n" +
        "      products.*, \n" +
        "      product_stock.size, \n" +
        "      product_stock.count, \n" +
        "      product_images.image_url\n" +
        "    FROM \n" +
        "      products\n" +
        "    LEFT JOIN \n" +
        "      product_stock ON products.id = product_stock.product_id\n" +
        "    LEFT JOIN \n" +
        "      product_images ON products.id = product_images.product_id\n" +
        "      WHERE products.id IN (\n" +
        "      SELECT DISTINCT products.id\n" +
        "      FROM products\n" +
        "      LEFT JOIN product_stock ON products.id = product_stock.product_id\n" +
        "      WHERE 1=1 AND products.gender = $1 AND products.category = $2 AND (product_stock.size = $3 OR product_stock.size = $4 OR product_stock.size = $5 OR product_stock.size = $6) AND (products.color = $7 OR products.color = $8 OR products.color = $9) AND (products.brand = $10 OR products.brand = $11) AND (products.material = $12))",
      queryParams: [
        "gender",
        "category",
        "40",
        "41",
        "46",
        "48",
        "red",
        "white",
        "black",
        "Zalton",
        "UrbanStep",
        "mesh",
      ],
    };
    expect(result).toEqual(expectedOutput);
  });
});
