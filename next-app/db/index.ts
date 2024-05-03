import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { tickers } from "./schema";

const connectionString = "postgres://postgres.zwbhcfkvtlsncgvhpdpc:TittyBang@69@aws-0-ap-south-1.pooler.supabase.com:5432/postgres"

const client = postgres(connectionString);
const db = drizzle(client);

const allTickers = await db.select().from(tickers);

export { db, allTickers }