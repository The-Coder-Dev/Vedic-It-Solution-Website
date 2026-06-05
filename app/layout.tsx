import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LenisScroll from "@/components/LenisScroll";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Vedic It Solutions",
  description: "We help to grow your buisness with our best service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-scree flex flex-col overflow-x-hidden">
          <LenisScroll />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
