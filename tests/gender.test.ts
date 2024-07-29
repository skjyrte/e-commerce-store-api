import request from "supertest";
import {app} from "../src/server.js";
import shutdownAfterAll from "./shutdownAfterAll.js";

shutdownAfterAll();

//SECTION - GENDER
describe("GET /gender/men", () => {
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
          price: "129.99",
          initial_price: "149.99",
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
          price: "79.99",
          initial_price: "89.99",
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
          price: "70",
          initial_price: "79.99",
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
          price: "129.95",
          initial_price: "149.99",
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
          price: "149.95",
          initial_price: "169.99",
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

    const response = await request(app).get("/gender/men");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});
describe("GET /gender/women", () => {
  it("should return the expected response", async () => {
    const expectedResponse = {
      success: true,
      message: "GET Request Called",
      payload: [
        {
          id: "1d7837f2-ec4f-47f4-a434-b39440a298ef",
          brand: "Sprintz",
          model: "UltraZoom 210",
          gender: "women",
          category: "running",
          material: "synthetic",
          season: "winter",
          price: "180",
          initial_price: "199.99",
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
        },
        {
          id: "9d9e26fd-2b38-4b85-b99e-320d7b65c9cc",
          brand: "Fitterz",
          model: "ClassicOne 327",
          gender: "women",
          category: "casual",
          material: "canvas",
          season: "all_season",
          price: "99.95",
          initial_price: "119.99",
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
        },
        {
          id: "ba43b7a2-1ac5-4a43-a0eb-b034d258b69f",
          brand: "NeoGrip",
          model: "RetroFlex 9000",
          gender: "women",
          category: "casual",
          material: "leather",
          season: "all_season",
          price: "75",
          initial_price: "89.99",
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
        },
        {
          id: "e5d1a9d9-65a3-4b7b-8fcf-bb2d91d07b6b",
          brand: "SoulFit",
          model: "Jazz Runner",
          gender: "women",
          category: "casual",
          material: "suede",
          season: "all_season",
          price: "59.95",
          initial_price: "69.99",
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
        },
        {
          id: "75875d89-ecf0-4e19-8f38-8b9a39211df0",
          brand: "FemmeRun",
          model: "WaveMaster 24",
          gender: "women",
          category: "running",
          material: "synthetic",
          season: "all_season",
          price: "129.99",
          initial_price: "149.99",
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
        },
      ],
    };
    const response = await request(app).get("/gender/women");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

//SECTION - CATEGORY
describe("GET /gender/men/category/running", () => {
  it("should return the expected response", async () => {
    const expectedResponse = {
      success: true,
      message: "GET Request Called",
      payload: [
        {
          id: "25d3eef0-d854-4d1e-b11b-bec75d5da9c5",
          brand: "UrbanRun",
          model: "AirFlow 14",
          gender: "men",
          category: "running",
          material: "mesh",
          season: "all_season",
          price: "129.95",
          initial_price: "149.99",
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
          price: "149.95",
          initial_price: "169.99",
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
    const response = await request(app).get("/gender/men/category/running");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});
describe("GET /gender/men/category/sneakers", () => {
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
          price: "129.99",
          initial_price: "149.99",
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
          price: "70",
          initial_price: "79.99",
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
    const response = await request(app).get("/gender/men/category/sneakers");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

//SECTION - BRAND
describe("GET /gender/men/category/sneakers/NeoGrip.SoulFit", () => {
  it("should return the expected response", async () => {
    const expectedResponse = {success: false, message: "Category not found"};
    const response = await request(app).get(
      "/gender/men/category/sneakers/NeoGrip.SoulFit"
    );
    expect(response.status).toBe(404);
    expect(response.body).toEqual(expectedResponse);
  });
});
describe("GET /gender/men/category/sneakers/Zalton.UrbanStep.NeoGrip.SoulFit", () => {
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
          price: "129.99",
          initial_price: "149.99",
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
          price: "70",
          initial_price: "79.99",
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
      "/gender/men/category/sneakers/Zalton.UrbanStep.NeoGrip.SoulFit"
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

//SECTION - COLOR
describe("GET /gender/men/category/sneakers/Zalton.UrbanStep.NeoGrip.SoulFit_red", () => {
  it("should return the expected response", async () => {
    const expectedResponse = {success: false, message: "Category not found"};
    const response = await request(app).get(
      "/gender/men/category/sneakers/Zalton.UrbanStep.NeoGrip.SoulFit_red"
    );
    expect(response.status).toBe(404);
    expect(response.body).toEqual(expectedResponse);
  });
});
describe("GET /gender/men/category/sneakers/Zalton.UrbanStep.NeoGrip.SoulFit_red.white.black", () => {
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
          price: "129.99",
          initial_price: "149.99",
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
          price: "70",
          initial_price: "79.99",
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
      "/gender/men/category/sneakers/Zalton.UrbanStep.NeoGrip.SoulFit_red.white.black"
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

//SECTION - SIZE
describe("GET /gender/men/category/sneakers/Zalton.UrbanStep_red.white.black__size-39.40", () => {
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
          price: "129.99",
          initial_price: "149.99",
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
          price: "70",
          initial_price: "79.99",
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
      "/gender/men/category/sneakers/Zalton.UrbanStep_red.white.black__size-39.40"
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});
describe("GET /gender/men/category/sneakers/Zalton.UrbanStep_red.white.black__size-39.40.41.42.46.48", () => {
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
          price: "129.99",
          initial_price: "149.99",
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
          price: "70",
          initial_price: "79.99",
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
      "/gender/men/category/sneakers/Zalton.UrbanStep_red.white.black__size-39.40.41.42.46.48"
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedResponse);
  });
});

//SECTION - MATERIAL
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
          price: "129.99",
          initial_price: "149.99",
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
          price: "70",
          initial_price: "79.99",
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

//SECTION - SEASON
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
          price: "70",
          initial_price: "79.99",
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
