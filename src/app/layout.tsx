"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { store } from "../store";
import { Provider } from "react-redux";
import { StoreProvider } from "@/components/storeProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </head>
        <body
          id="root"
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <StoreProvider>{children}</StoreProvider>
        </body>
      </html>
    </Provider>
  );
}
