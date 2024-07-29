import {server} from "../../src/server.js";
import knexDb from "../../src/knexDb";

const shutdownAfterAll = () => {
  afterAll(async () => {
    await new Promise((resolve) =>
      server.close(() => {
        console.log("HTTP server closed");
        resolve("closed");
      })
    );

    try {
      await knexDb.destroy();
      console.log("Database connection pool closed");
    } catch (err) {
      console.error("Error closing database connection pool", err);
      throw err;
    }
  });
};

export default shutdownAfterAll;
