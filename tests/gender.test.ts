import request from "supertest";
import {app, server} from "../src/server.js";

afterAll(() => {
  server.close();
});

describe("GET /gender/men/", () => {
  it("should return the expected response", async () => {
    const expectedResponse = {
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
          short_description: "Versatile Running Shoes",
          description:
            "The Zalton AirFlex 5000 delivers the same responsive cushioning that runners love.",
          features: ["Responsive cushioning", "Breathable mesh upper"],
          price: "129.99",
          initial_price: "149.99",
          rating_reviews: 120,
          rating_value: "4.5",
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
          short_description: "Retro-Inspired Casual Sneakers",
          description:
            "The Trekster Future Rider X1 combines retro style with modern comfort.",
          features: ["Rider Foam midsole", "Suede and mesh upper"],
          price: "79.99",
          initial_price: "89.99",
          rating_reviews: 60,
          rating_value: "4.3",
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
          short_description: "Versatile Running Shoes",
          description:
            "The UrbanStep AirStride 3000 offers a balanced mix of cushioning and flexibility for runners.",
          features: ["Lightweight mesh upper", "EVA sockliner"],
          price: "70",
          initial_price: "79.99",
          rating_reviews: 55,
          rating_value: "4.4",
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
          short_description: "Plush Running Shoes",
          description:
            "The UrbanRun AirFlow 14 offers plush cushioning and smooth transitions for neutral runners.",
          features: ["DNA Loft cushioning", "Segmented Crash Pad"],
          price: "129.95",
          initial_price: "149.99",
          rating_reviews: 80,
          rating_value: "4.8",
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
          short_description: "Premium Cushioned Running Shoes",
          description:
            "The StrideMax GelBliss 230 offers premium cushioning and support for long-distance runners.",
          features: ["GEL cushioning technology", "Breathable mesh upper"],
          price: "149.95",
          initial_price: "169.99",
          rating_reviews: 90,
          rating_value: "4.7",
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

    const response = await request(app).get("/gender/men/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

describe("GET /gender/men/category/sneakers/Zalton.UrbanStep_red.white.black__size-40.41.46.48?material=mesh", () => {
  it("should return the expected response", async () => {
    const expectedResponse = {
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
          short_description: "Versatile Running Shoes",
          description:
            "The Zalton AirFlex 5000 delivers the same responsive cushioning that runners love.",
          features: ["Responsive cushioning", "Breathable mesh upper"],
          price: "129.99",
          initial_price: "149.99",
          rating_reviews: 120,
          rating_value: "4.5",
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
          price: "70",
          initial_price: "79.99",
          rating_reviews: 55,
          rating_value: "4.4",
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
      ],
    };

    const response = await request(app).get(
      "/gender/men/category/sneakers/Zalton.UrbanStep_red.white.black__size-40.41.46.48?material=mesh"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

describe("GET /gender/men/category/sneakers/Zalton.UrbanStep_red.white.black__size-40.41.46.48?material=mesh&season=winter", () => {
  it("should return the expected response", async () => {
    const expectedResponse = {
      success: true,
      message: "GET Request Called",
      payload: [
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
          price: "70",
          initial_price: "79.99",
          rating_reviews: 55,
          rating_value: "4.4",
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
      ],
    };
    const response = await request(app).get(
      "/gender/men/category/sneakers/Zalton.UrbanStep_red.white.black__size-40.41.46.48?material=mesh&season=winter"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});
