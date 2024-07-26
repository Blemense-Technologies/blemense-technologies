import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blemense Technologies",
  description: "Building Next-Gen Tech Solutions",
  icons: {
    icon: "/favicon.png"
  },
  keywords: "Blemense, Technologies, Next-Gen, Tech Solutions, Best Software Company",
  openGraph: {
    type: "website",
    url: "https://blemense.tech",
    title: "Blemense Technologies",
    description: "Building Next-Gen Tech Solutions",
    images: [
      {
        url: "https://blemense.tech/images/preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blemense Technologies",
      },
    ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
