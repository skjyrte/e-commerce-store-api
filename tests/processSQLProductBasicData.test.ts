import {describe, expect} from "@jest/globals";
import processSQLProductBasicData from "../src/routes/routerUtilities/processSQLProductBasicData";
import Decimal from "decimal.js";
import {performance} from "perf_hooks";

import {
  ProductBasicDataDatabase,
  ProductBasicDataResponse,
} from "./types/tests";

describe("processSQLProductBasicData: ", () => {
  const inputRows = [
    {
      id: "a1524b05-64a6-4d2d-9d6b-6ab57b804923",
      brand: "Zalton",
      model: "AirFlex 5000",
      gender: "men",
      category: "sneakers",
      material: "mesh",
      season: "all_season",
      price: new Decimal(129.99),
      initial_price: new Decimal(149.99),
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
      price: new Decimal(129.99),
      initial_price: new Decimal(149.99),
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
      price: new Decimal(129.99),
      initial_price: new Decimal(149.99),
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
      price: new Decimal(129.99),
      initial_price: new Decimal(149.99),
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
      price: new Decimal(129.99),
      initial_price: new Decimal(149.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/buty-meskie-dunk-low-retro-wwlDHh.png",
      color: "white",
      size: "44",
      count: 8,
    },
    {
      id: "30984c42-37de-4377-8de3-2d16f4897a18",
      brand: "Trekster",
      model: "Future Rider X1",
      gender: "men",
      category: "casual",
      material: "suede",
      season: "all_season",
      price: new Decimal(79.99),
      initial_price: new Decimal(89.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8254cc4-b776-47b2-898f-7e6e1f564c94/buty-meskie-air-force-1-07-QMx6sn.png",
      color: "black",
      size: "41",
      count: 20,
    },
    {
      id: "30984c42-37de-4377-8de3-2d16f4897a18",
      brand: "Trekster",
      model: "Future Rider X1",
      gender: "men",
      category: "casual",
      material: "suede",
      season: "all_season",
      price: new Decimal(79.99),
      initial_price: new Decimal(89.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8254cc4-b776-47b2-898f-7e6e1f564c94/buty-meskie-air-force-1-07-QMx6sn.png",
      color: "black",
      size: "42",
      count: 15,
    },
    {
      id: "30984c42-37de-4377-8de3-2d16f4897a18",
      brand: "Trekster",
      model: "Future Rider X1",
      gender: "men",
      category: "casual",
      material: "suede",
      season: "all_season",
      price: new Decimal(79.99),
      initial_price: new Decimal(89.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8254cc4-b776-47b2-898f-7e6e1f564c94/buty-meskie-air-force-1-07-QMx6sn.png",
      color: "black",
      size: "43",
      count: 12,
    },
    {
      id: "30984c42-37de-4377-8de3-2d16f4897a18",
      brand: "Trekster",
      model: "Future Rider X1",
      gender: "men",
      category: "casual",
      material: "suede",
      season: "all_season",
      price: new Decimal(79.99),
      initial_price: new Decimal(89.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8254cc4-b776-47b2-898f-7e6e1f564c94/buty-meskie-air-force-1-07-QMx6sn.png",
      color: "black",
      size: "44",
      count: 8,
    },
    {
      id: "30984c42-37de-4377-8de3-2d16f4897a18",
      brand: "Trekster",
      model: "Future Rider X1",
      gender: "men",
      category: "casual",
      material: "suede",
      season: "all_season",
      price: new Decimal(79.99),
      initial_price: new Decimal(89.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8254cc4-b776-47b2-898f-7e6e1f564c94/buty-meskie-air-force-1-07-QMx6sn.png",
      color: "black",
      size: "45",
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
      price: new Decimal(70),
      initial_price: new Decimal(79.99),
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
      price: new Decimal(70),
      initial_price: new Decimal(79.99),
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
      price: new Decimal(70),
      initial_price: new Decimal(79.99),
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
      price: new Decimal(70),
      initial_price: new Decimal(79.99),
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
      price: new Decimal(70),
      initial_price: new Decimal(79.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f228c7a1-177d-483b-ba52-a5e41f43fbd2/buty-meskie-air-max-plus-utility-HkwSWp.png",
      color: "black",
      size: "43",
      count: 12,
    },
    {
      id: "25d3eef0-d854-4d1e-b11b-bec75d5da9c5",
      brand: "UrbanRun",
      model: "AirFlow 14",
      gender: "men",
      category: "running",
      material: "mesh",
      season: "all_season",
      price: new Decimal(129.95),
      initial_price: new Decimal(149.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd8662cc-1947-4ead-b02f-a474142e7430/buty-air-max-dn-se-4PdLm8.png",
      color: "black",
      size: "40",
      count: 14,
    },
    {
      id: "25d3eef0-d854-4d1e-b11b-bec75d5da9c5",
      brand: "UrbanRun",
      model: "AirFlow 14",
      gender: "men",
      category: "running",
      material: "mesh",
      season: "all_season",
      price: new Decimal(129.95),
      initial_price: new Decimal(149.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd8662cc-1947-4ead-b02f-a474142e7430/buty-air-max-dn-se-4PdLm8.png",
      color: "black",
      size: "41",
      count: 20,
    },
    {
      id: "25d3eef0-d854-4d1e-b11b-bec75d5da9c5",
      brand: "UrbanRun",
      model: "AirFlow 14",
      gender: "men",
      category: "running",
      material: "mesh",
      season: "all_season",
      price: new Decimal(129.95),
      initial_price: new Decimal(149.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd8662cc-1947-4ead-b02f-a474142e7430/buty-air-max-dn-se-4PdLm8.png",
      color: "black",
      size: "42",
      count: 15,
    },
    {
      id: "25d3eef0-d854-4d1e-b11b-bec75d5da9c5",
      brand: "UrbanRun",
      model: "AirFlow 14",
      gender: "men",
      category: "running",
      material: "mesh",
      season: "all_season",
      price: new Decimal(129.95),
      initial_price: new Decimal(149.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd8662cc-1947-4ead-b02f-a474142e7430/buty-air-max-dn-se-4PdLm8.png",
      color: "black",
      size: "43",
      count: 10,
    },
    {
      id: "25d3eef0-d854-4d1e-b11b-bec75d5da9c5",
      brand: "UrbanRun",
      model: "AirFlow 14",
      gender: "men",
      category: "running",
      material: "mesh",
      season: "all_season",
      price: new Decimal(129.95),
      initial_price: new Decimal(149.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd8662cc-1947-4ead-b02f-a474142e7430/buty-air-max-dn-se-4PdLm8.png",
      color: "black",
      size: "44",
      count: 12,
    },
    {
      id: "0d55026d-ff26-487f-9183-064e801a150e",
      brand: "StrideMax",
      model: "GelBliss 230",
      gender: "men",
      category: "running",
      material: "synthetic",
      season: "all_season",
      price: new Decimal(149.95),
      initial_price: new Decimal(169.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78913680-cf99-47a0-b03c-9484cc689f24/buty-p-6000-B011cg.png",
      color: "white",
      size: "40",
      count: 15,
    },
    {
      id: "0d55026d-ff26-487f-9183-064e801a150e",
      brand: "StrideMax",
      model: "GelBliss 230",
      gender: "men",
      category: "running",
      material: "synthetic",
      season: "all_season",
      price: new Decimal(149.95),
      initial_price: new Decimal(169.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78913680-cf99-47a0-b03c-9484cc689f24/buty-p-6000-B011cg.png",
      color: "white",
      size: "41",
      count: 18,
    },
    {
      id: "0d55026d-ff26-487f-9183-064e801a150e",
      brand: "StrideMax",
      model: "GelBliss 230",
      gender: "men",
      category: "running",
      material: "synthetic",
      season: "all_season",
      price: new Decimal(149.95),
      initial_price: new Decimal(169.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78913680-cf99-47a0-b03c-9484cc689f24/buty-p-6000-B011cg.png",
      color: "white",
      size: "42",
      count: 22,
    },
    {
      id: "0d55026d-ff26-487f-9183-064e801a150e",
      brand: "StrideMax",
      model: "GelBliss 230",
      gender: "men",
      category: "running",
      material: "synthetic",
      season: "all_season",
      price: new Decimal(149.95),
      initial_price: new Decimal(169.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78913680-cf99-47a0-b03c-9484cc689f24/buty-p-6000-B011cg.png",
      color: "white",
      size: "43",
      count: 15,
    },
    {
      id: "0d55026d-ff26-487f-9183-064e801a150e",
      brand: "StrideMax",
      model: "GelBliss 230",
      gender: "men",
      category: "running",
      material: "synthetic",
      season: "all_season",
      price: new Decimal(149.95),
      initial_price: new Decimal(169.99),
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78913680-cf99-47a0-b03c-9484cc689f24/buty-p-6000-B011cg.png",
      color: "white",
      size: "44",
      count: 20,
    },
  ];
  it("should process SQL rows and return the expected response: GET http://localhost:4000/gender/men", () => {
    const response = {
      success: true,
      message: "GET Request Called",
      payload: [
        {
          id: "a1524b05-64a6-4d2d-9d6b-6ab57b804923",
          brand: "Zalton",
          model: "AirFlex 5000",
          gender: "men",
          category: "sneakers",
          material: "mesh",
          season: "all_season",
          price: new Decimal("129.99"),
          initial_price: new Decimal("149.99"),
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
          id: "30984c42-37de-4377-8de3-2d16f4897a18",
          brand: "Trekster",
          model: "Future Rider X1",
          gender: "men",
          category: "casual",
          material: "suede",
          season: "all_season",
          price: new Decimal("79.99"),
          initial_price: new Decimal("89.99"),
          thumbnail:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8254cc4-b776-47b2-898f-7e6e1f564c94/buty-meskie-air-force-1-07-QMx6sn.png",
          color: "black",
          stock_array: [
            {size: "41", count: 20},
            {size: "42", count: 15},
            {size: "43", count: 12},
            {size: "44", count: 8},
            {size: "45", count: 10},
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
          price: new Decimal("70"),
          initial_price: new Decimal("79.99"),
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
        {
          id: "25d3eef0-d854-4d1e-b11b-bec75d5da9c5",
          brand: "UrbanRun",
          model: "AirFlow 14",
          gender: "men",
          category: "running",
          material: "mesh",
          season: "all_season",
          price: new Decimal("129.95"),
          initial_price: new Decimal("149.99"),
          thumbnail:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cd8662cc-1947-4ead-b02f-a474142e7430/buty-air-max-dn-se-4PdLm8.png",
          color: "black",
          stock_array: [
            {size: "40", count: 14},
            {size: "41", count: 20},
            {size: "42", count: 15},
            {size: "43", count: 10},
            {size: "44", count: 12},
          ],
        },
        {
          id: "0d55026d-ff26-487f-9183-064e801a150e",
          brand: "StrideMax",
          model: "GelBliss 230",
          gender: "men",
          category: "running",
          material: "synthetic",
          season: "all_season",
          price: new Decimal("149.95"),
          initial_price: new Decimal("169.99"),
          thumbnail:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/78913680-cf99-47a0-b03c-9484cc689f24/buty-p-6000-B011cg.png",
          color: "white",
          stock_array: [
            {size: "40", count: 15},
            {size: "41", count: 18},
            {size: "42", count: 22},
            {size: "43", count: 15},
            {size: "44", count: 20},
          ],
        },
      ],
    };
    const expectedOutput = response.payload;

    const result = processSQLProductBasicData(inputRows);

    expect(result).toEqual(expectedOutput);
  });

  it("should handle empty input rows", () => {
    const inputRows: ProductBasicDataDatabase[] = [];
    const expectedOutput: ProductBasicDataResponse[] = [];

    const result = processSQLProductBasicData(inputRows);

    expect(result).toEqual(expectedOutput);
  });

  it("should measure the performance of the function", () => {
    const iterations = 100000; // 100 000 assumed be take less than 10 sec
    const start = performance.now();

    for (let i = 0; i < iterations; i++) {
      processSQLProductBasicData(inputRows);
    }

    const end = performance.now();
    const elapsed = end - start;

    console.log(
      `Time taken for ${iterations} iterations: ${elapsed.toFixed(2)}ms`
    );
    expect(elapsed).toBeLessThan(10000); // Example assertion to ensure the test passes
  });
});
