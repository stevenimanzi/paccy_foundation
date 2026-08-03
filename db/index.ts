import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

export function getDb() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error(
      "MySQL is not configured. Set DATABASE_URL in .dev.vars for local development and as a protected runtime secret in production."
    );
  }

  const pool = mysql.createPool(databaseUrl);
  return drizzle(pool, { schema, mode: "default" });
}
