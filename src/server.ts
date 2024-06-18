import "./config.js"; //import for side effects only
import express from "express";
import cors from "cors";
import productRoute from "./routes/product.js";
import genderRoute from "./routes/gender.js";
import categoryRoute from "./routes/category.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/product", productRoute);
app.use("/gender", genderRoute);
app.use("/category", categoryRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});
