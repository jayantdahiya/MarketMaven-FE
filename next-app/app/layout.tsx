import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import { ModeToggle } from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Market-Maven",
  description: "Application to forecast stocks using AI forecasting models",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen antialiased">
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
