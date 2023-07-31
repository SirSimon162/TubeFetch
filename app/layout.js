'use client'
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/marginals/NavBar";
import Footer from "./components/marginals/Footer";
import { YTProvider } from "./context/YTContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TubeFetch",
  description: "TubeFetch: A Website to view your favourite YouTube Videos without any distractions and irrelevant recommendations",
  keywords: "TubeFetch, YouTube, Video Player"
};

export default function RootLayout({ children }) {
  return (
    <html lang="english">
      <body className={inter.className}>
        <NavBar />
        <YTProvider>
          {children}
        </YTProvider>
        <Footer/>
      </body>
    </html>
  );
}
