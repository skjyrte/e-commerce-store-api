import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";
const envFile = process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev";
dotenv.config({ path: envFile });
console.log(process.env);
const connectionData = () => process.env.NODE_ENV === "production"
    ? { connectionString: process.env.CONNECTION_STRING }
    : {
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: parseInt(process.env.POSTGRES_PORT || "5432"),
    };
const pool = new Pool(connectionData());
pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});
pool.on("connect", () => {
    console.log("Connected to PostgreSQL database");
});
export default pool;
