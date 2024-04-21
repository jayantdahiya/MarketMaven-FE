import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const tickers = pgTable('tickers', {
  symbol: text('Symbol').primaryKey(),
  name: text('Name'),
  sector: text('Sector'),
});