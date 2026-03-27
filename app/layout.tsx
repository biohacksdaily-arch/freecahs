import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreeCash - Verdien Geld met Gamen",
  description: "Sluit je aan bij duizenden die dagelijks verdienen door games te spelen en direct uit te betalen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
