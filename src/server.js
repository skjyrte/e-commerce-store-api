import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/product.js";

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/product", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});
