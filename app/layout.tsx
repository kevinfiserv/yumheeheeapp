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
      <NextUIProvider>
        <body className={inter.className}>
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar></Navbar>
            <div className="container">{children}</div>
          </main>
        </body>
      </NextUIProvider>
    </html>
  );
}
