import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const envFile =
  process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev";
dotenv.config({ path: envFile });
console.log(process.env);

import router from "./routes/product.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/product", router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});
