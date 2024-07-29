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
    } catch (e) {
      console.error("Error closing database connection pool", e);
      throw e;
    }
  });
};

export default shutdownAfterAll;
