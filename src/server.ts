import "./config"; //import for side effects only
import express from "express";
import cors from "cors";
/* import productRoute from "./routes/product.js"; */ //FIXME - route disabled until fixed
import genderRoute from "./routes/gender";
import categoryRoute from "./routes/category";

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

/* app.use("/product", productRoute);*/ //FIXME - route disabled until fixed
app.use("/gender", genderRoute);
app.use("/category", categoryRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});
