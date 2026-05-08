import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reorder Alerts — Smart Shopify Inventory Management",
  description: "Analyzes sales velocity, predicts stockouts, and sends automated reorder alerts with optimal quantities and timing for Shopify stores."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c4c19092-6ec0-48de-875b-16751a82cee0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
