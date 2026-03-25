import type { Metadata } from "next";

import { ReactNode } from "react";

import { geistMono, geistSans, oswald } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nivo",
  description: "Your go-to invoice generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
