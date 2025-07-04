import type { Metadata } from "next";
import { Inter, Azeret_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const azeretMono = Azeret_Mono({
  variable: "--font-azeret-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Latte Cafe",
  description: "Latte Cafe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        </head>
        <body className={`${inter.variable} ${azeretMono.variable} antialiased`}>
            {children}
        </body>
    </html>
  );
}
