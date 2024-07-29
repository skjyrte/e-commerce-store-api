import "./config.js"; //import for side effects only
import express from "express";
import cors from "cors";
import productRoute from "./routes/product.js";
import genderRoute from "./routes/gender.js";
import knexDb from "./knexDb.js";

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use("/product", productRoute);
app.use("/gender", genderRoute);

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});

const gracefulShutdown = () => {
  console.log("Received shutdown signal, closing HTTP server...");
  server.close(async () => {
    console.log("HTTP server closed");
    try {
      await knexDb.destroy();
      console.log("Database connection pool closed");
      process.exit(0);
    } catch (err) {
      console.error("Error closing database connection pool", err);
      process.exit(1);
    }
  });
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

export {app, server};
