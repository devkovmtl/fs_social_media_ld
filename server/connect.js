import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2";

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

export const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});
