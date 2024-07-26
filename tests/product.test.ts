import request from "supertest";
import {app, server} from "../src/server.js";

afterAll(() => {
  server.close();
});

describe("GET /product", () => {
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
          image_url_array: [
            "https://example.com/image1_3.jpg",
            "https://example.com/image1_2.jpg",
            "https://example.com/image1_1.jpg",
          ],
        },
        {
          id: "1d7837f2-ec4f-47f4-a434-b39440a298ef",
          brand: "Sprintz",
          model: "UltraZoom 210",
          gender: "women",
          category: "running",
          material: "synthetic",
          season: "winter",
          short_description: "Energy-Returning Running Shoes",
          description:
            "The Sprintz UltraZoom 210 features an innovative Boost midsole for energy-returning cushioning.",
          features: ["Boost midsole", "Flexible Stretchweb outsole"],
          price: "180",
          initial_price: "199.99",
          rating_reviews: 90,
          rating_value: "4.7",
          thumbnail:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/214ed86c-49ca-41f8-ac51-bb5a30b27b39/buty-v2k-run-dkXfnV.png",
          color: "beige",
          stock_array: [
            {size: "36", count: 10},
            {size: "37", count: 15},
            {size: "38", count: 20},
            {size: "39", count: 12},
            {size: "40", count: 18},
          ],
          image_url_array: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/buty-air-force-1-07-next-nature-7dl9fM.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d6402fa7-f5ab-450a-98cc-76b98f8e9e54/buty-air-force-1-07-next-nature-7dl9fM.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5707c17c-76ae-43e5-bd91-a5c984c1b13c/buty-air-force-1-07-next-nature-7dl9fM.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fa595e0f-8a7f-4f04-9553-67d8265635f4/buty-air-force-1-07-next-nature-7dl9fM.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bb031375-73f7-4521-9a8d-d46b83332188/buty-air-force-1-07-next-nature-7dl9fM.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/116c99aa-26ac-4fb0-8f1f-257f7b0664fb/buty-air-force-1-07-next-nature-7dl9fM.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3ed63ccb-f775-475a-ae2f-b9ca49e7f6c4/buty-air-force-1-07-next-nature-7dl9fM.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd5f98b1-2cdf-49d6-a854-829c14fa79b1/buty-air-force-1-07-next-nature-7dl9fM.png",
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
          image_url_array: [
            "https://example.com/image3_3.jpg",
            "https://example.com/image3_2.jpg",
            "https://example.com/image3_1.jpg",
          ],
        },
        {
          id: "9d9e26fd-2b38-4b85-b99e-320d7b65c9cc",
          brand: "Fitterz",
          model: "ClassicOne 327",
          gender: "women",
          category: "casual",
          material: "canvas",
          season: "all_season",
          short_description: "Classic Casual Sneakers",
          description:
            "The Fitterz ClassicOne 327 features a heritage-inspired design for everyday wear.",
          features: [
            "Lightweight EVA foam cushioning",
            "Durable rubber outsole",
          ],
          price: "99.95",
          initial_price: "119.99",
          rating_reviews: 45,
          rating_value: "4.2",
          thumbnail:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7b69dc5e-caf3-4425-b053-bb2efea296f7/buty-dunk-low-15mQNw.png",
          color: "white",
          stock_array: [
            {size: "36", count: 15},
            {size: "37", count: 18},
            {size: "38", count: 22},
            {size: "39", count: 15},
            {size: "40", count: 20},
          ],
          image_url_array: [
            "https://example.com/image4_3.jpg",
            "https://example.com/image4_2.jpg",
            "https://example.com/image4_1.jpg",
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
          image_url_array: [
            "https://example.com/image5_3.jpg",
            "https://example.com/image5_2.jpg",
            "https://example.com/image5_1.jpg",
          ],
        },
        {
          id: "ba43b7a2-1ac5-4a43-a0eb-b034d258b69f",
          brand: "NeoGrip",
          model: "RetroFlex 9000",
          gender: "women",
          category: "casual",
          material: "leather",
          season: "all_season",
          short_description: "Timeless Casual Sneakers",
          description:
            "The NeoGrip RetroFlex 9000 delivers timeless style and cushioned comfort for everyday wear.",
          features: ["Soft leather upper", "EVA midsole"],
          price: "75",
          initial_price: "89.99",
          rating_reviews: 65,
          rating_value: "4.6",
          thumbnail:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c6d9d042-f0b9-46a3-bd1f-04e16541a1d9/buty-air-force-1-07-next-nature-7dl9fM.png",
          color: "white",
          stock_array: [
            {size: "35", count: 15},
            {size: "36", count: 18},
            {size: "37", count: 22},
            {size: "38", count: 15},
            {size: "39", count: 20},
          ],
          image_url_array: [
            "https://example.com/image6_3.jpg",
            "https://example.com/image6_2.jpg",
            "https://example.com/image6_1.jpg",
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
          image_url_array: [
            "https://example.com/image7_3.jpg",
            "https://example.com/image7_2.jpg",
            "https://example.com/image7_1.jpg",
          ],
        },
        {
          id: "e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b",
          brand: "SoulFit",
          model: "Jazz Runner",
          gender: "women",
          category: "casual",
          material: "suede",
          season: "all_season",
          short_description: "Iconic Retro Sneakers",
          description:
            "The SoulFit Jazz Runner is an iconic sneaker known for its comfort and style.",
          features: ["Padded collar and tongue", "Shock-absorbing EVA midsole"],
          price: "59.95",
          initial_price: "69.99",
          rating_reviews: 70,
          rating_value: "4.3",
          thumbnail:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a2a36de-c068-4278-aecb-c3a0ddf48bf4/buty-cortez-textile-ntjT79.png",
          color: "white",
          stock_array: [
            {size: "35", count: 20},
            {size: "36", count: 15},
            {size: "37", count: 12},
            {size: "38", count: 18},
            {size: "39", count: 10},
          ],
          image_url_array: [
            "https://example.com/image8_3.jpg",
            "https://example.com/image8_2.jpg",
            "https://example.com/image8_1.jpg",
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
          image_url_array: [
            "https://example.com/image9_3.jpg",
            "https://example.com/image9_2.jpg",
            "https://example.com/image9_1.jpg",
          ],
        },
        {
          id: "75875d89-ecf0-4e19-8f38-8b9a39211df0",
          brand: "FemmeRun",
          model: "WaveMaster 24",
          gender: "women",
          category: "running",
          material: "synthetic",
          season: "all_season",
          short_description: "Smooth Running Shoes",
          description:
            "The FemmeRun WaveMaster24 features a comfortable and smooth ride for neutral runners.",
          features: ["Wave Plate technology", "Breathable mesh upper"],
          price: "129.99",
          initial_price: "149.99",
          rating_reviews: 75,
          rating_value: "4.5",
          thumbnail:
            "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28b83dfa-2798-43b2-9950-46ab230dae52/buty-dunk-low-Cqd7CZ.png",
          color: "beige",
          stock_array: [
            {size: "35", count: 14},
            {size: "36", count: 20},
            {size: "37", count: 15},
            {size: "38", count: 10},
            {size: "39", count: 12},
          ],
          image_url_array: [
            "https://example.com/image10_3.jpg",
            "https://example.com/image10_2.jpg",
            "https://example.com/image10_1.jpg",
          ],
        },
      ],
    };

    const response = await request(app).get("/product");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

describe("GET /product/a1524b05-64a6-4d2d-9d6b-6ab57b804923", () => {
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
            {
              size: "40",
              count: 20,
            },
            {
              size: "41",
              count: 15,
            },
            {
              size: "42",
              count: 10,
            },
            {
              size: "43",
              count: 12,
            },
            {
              size: "44",
              count: 8,
            },
          ],
          image_url_array: [
            "https://example.com/image1_1.jpg",
            "https://example.com/image1_2.jpg",
            "https://example.com/image1_3.jpg",
          ],
        },
      ],
    };
    const response = await request(app).get(
      "/product/a1524b05-64a6-4d2d-9d6b-6ab57b804923"
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});
