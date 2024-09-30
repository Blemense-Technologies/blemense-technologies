import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./themeProviders";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const helvetica = localFont({
  src: './font/HelveticaNowDisplay-Regular.otf',
  variable: '--font-helvetica'
})

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${helvetica.variable} font-sans bg-[#121212]`}>
        <Provider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
