import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faraji Shikanda Ombonya | Software Engineer Portfolio",
  description:
    "Faraji Shikanda Ombonya is a skilled Software Engineer specializing in web development, software architecture, and innovative tech solutions. Explore my portfolio to see my projects and expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-zinc-50 dark:bg-black">
          <div className="bg-white dark:bg-zinc-900 text-left max-w-7xl mx-auto">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
