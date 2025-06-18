import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./themeProviders";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";

const helvetica = localFont({
  src: './font/HelveticaNowDisplay-Regular.otf',
  variable: '--font-helvetica'
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://blemense.tech'),
  title: {
    default: "Blemense Technologies - Next-Gen Software Development & Tech Solutions",
    template: "%s | Blemense Technologies"
  },
  description: "Leading software development company specializing in web applications, mobile apps, cloud solutions, and cutting-edge technology services. Transform your business with our innovative tech solutions.",
  keywords: [
    "software development",
    "web development", 
    "mobile app development",
    "cloud solutions",
    "React development",
    "Next.js development",
    "custom software",
    "tech consulting",
    "digital transformation",
    "UI/UX design",
    "API development",
    "software company",
    "Blemense Technologies"
  ],
  authors: [{ name: "Blemense Technologies Team" }],
  creator: "Blemense Technologies",
  publisher: "Blemense Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blemense.tech",
    siteName: "Blemense Technologies",
    title: "Blemense Technologies - Next-Gen Software Development & Tech Solutions",
    description: "Leading software development company specializing in web applications, mobile apps, cloud solutions, and cutting-edge technology services. Transform your business with our innovative tech solutions.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blemense Technologies - Software Development Company",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blemense Technologies - Next-Gen Software Development & Tech Solutions",
    description: "Leading software development company specializing in web applications, mobile apps, cloud solutions, and cutting-edge technology services.",
    images: ["/opengraph-image.jpg"],
    creator: "@blemensetech",
    site: "@blemensetech",
  },
  alternates: {
    canonical: "https://blemense.tech",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Blemense Technologies",
              url: "https://blemense.tech",
              logo: "https://blemense.tech/Logo.png",
              description: "Leading software development company specializing in web applications, mobile apps, cloud solutions, and cutting-edge technology services.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN"
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English"
              },
              sameAs: [
                "https://linkedin.com/company/blemense-technologies",
                "https://twitter.com/blemensetech",
                "https://github.com/blemense"
              ],
              serviceType: [
                "Software Development",
                "Web Development", 
                "Mobile App Development",
                "Cloud Solutions",
                "Tech Consulting"
              ]
            })
          }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${helvetica.variable} font-sans bg-[#121212] overflow-x-hidden`}>
        <SmoothScrollProvider>
          <Provider>
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </Provider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
