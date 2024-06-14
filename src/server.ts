import "./config.js"; //import for side effects only
import express from "express";
import cors from "cors";
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
