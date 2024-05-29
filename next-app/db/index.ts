import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { tickers } from "./schema";

const connectionString = process.env.DATABASE_URL;

const client = postgres(connectionString);
const db = drizzle(client);

const allTickers = await db.select().from(tickers);

export { db, allTickers }