'use client'
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/marginals/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TubeFetch",
  description: "TubeFetch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="english">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
