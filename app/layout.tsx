"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <main className="flex min-h-screen flex-col items-center justify-between p-24 max-w-l">
          <NextUIProvider>
            <div className="container">{children}</div>
          </NextUIProvider>
        </main>
      </body>
    </html>
  );
}
