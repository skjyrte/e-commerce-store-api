import pg from "pg";
const {Pool, types} = pg;
import Decimal from "decimal.js";

//NOTE - required to parse DECIMAL sql types
types.setTypeParser(types.builtins.NUMERIC, (val) => new Decimal(val));

/* eslint-disable indent */
const connectionData = () =>
  process.env.NODE_ENV === "production"
    ? {connectionString: process.env.CONNECTION_STRING}
    : {
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: parseInt(process.env.POSTGRES_PORT || "5432"),
      };
/* eslint-enable indent */

const pool = new Pool(connectionData());

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

pool.on("connect", () => {
  console.log("Connected to PostgreSQL database");
});

export default pool;
