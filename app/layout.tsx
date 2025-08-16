import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tool Finder",
  description: "Find the best AI tool for your needs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-arp="">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
