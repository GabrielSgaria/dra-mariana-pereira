import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dra. Mariana",
  description: "Dra. Mariana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={`bg-pink-50 text-zinc-900 ${inter.className}`}>
        <NavBar />        
        {children}
      </body>
    </html>
  );
}
