import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/product.js";
const ENV = process.env.NODE_ENV || "development";
const envFile = ENV === "development" ? "./.env.dev" : "./.env";
dotenv.config({ path: envFile });
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/product", router);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App is running at port: ${PORT}`);
});
