import pg from "pg";
const {types} = pg;
import Decimal from "decimal.js";
import knex from "knex";

//NOTE - required to parse DECIMAL sql types
types.setTypeParser(types.builtins.NUMERIC, (val) => new Decimal(val));

const knexDb = knex({
  client: "pg",
  debug: process.env.NODE_ENV === "development" ? false : false, //NOTE - to be disabled in prod
  connection: {
    connectionString: process.env.CONNECTION_STRING, //NOTE - has highest priority. Should be undefined in dev environment.
    host: process.env.HOST,
    port: parseInt(process.env.POSTGRES_PORT || "5432"),
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
});

knexDb.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

knexDb.on("connect", () => {
  console.log("Connected to PostgreSQL database");
});

export default knexDb;
