
import { pgTable, text } from "drizzle-orm/pg-core";

export const tickers = pgTable('S&P-500-tickers', {
  symbol: text('Symbol').primaryKey(),
  name: text('Name'),
  sector: text('Sector'),
});
        