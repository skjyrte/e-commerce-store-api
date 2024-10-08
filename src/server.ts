import "./config.js"; //NOTE - import for side effects only
import express from "express";
import cors from "cors";
import productRoute from "./routes/product.js";
import genderRoute from "./routes/gender.js";
import authenticationRoute from "./routes/authentication.js";
import knexDb from "./knexDb.js";
import cookieParser from "cookie-parser";
import cart from "./routes/cart.js";
import ping from "./routes/ping.js";

const corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true,
  secure: process.env.CONNECTION_SECURE === "TRUE",
  optionsSuccessStatus: 200,
};

console.log("COO", corsOptions.origin);

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors(corsOptions));

app.use("/product", productRoute);
app.use("/gender", genderRoute);
app.use("/auth", authenticationRoute);
app.use("/cart", cart);
app.use("/ping", ping);

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
    } catch (e) {
      console.error("Error closing database connection pool", e);
      process.exit(1);
    }
  });
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);

export {app, server};
