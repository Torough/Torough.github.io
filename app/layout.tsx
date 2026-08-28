import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://torough.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gabriel Chichi | Analytics Engineer",
    template: "%s | Gabriel Chichi",
  },
  description:
    "Portfolio and experience of Gabriel Chichi, Analytics Engineer at NHS England. Specialising in reproducible analytical pipelines, PySpark, Palantir Foundry, and national healthcare data.",
  keywords: [
    "Analytics Engineer",
    "Data Engineer",
    "NHS England",
    "Python",
    "PySpark",
    "Palantir Foundry",
    "Data Science",
    "Gabriel Chichi",
  ],
  authors: [{ name: "Gabriel Chichi" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "Gabriel Chichi",
    title: "Gabriel Chichi | Analytics Engineer",
    description:
      "Portfolio and experience of Gabriel Chichi, Analytics Engineer at NHS England.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Chichi | Analytics Engineer",
    description:
      "Portfolio and experience of Gabriel Chichi, Analytics Engineer at NHS England.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Chichi",
  jobTitle: "Analytics Engineer",
  worksFor: {
    "@type": "Organization",
    name: "NHS England",
  },
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/gabriel-chichi-7594bb96/",
    "https://github.com/Torough",
  ],
  email: "gabrielchichi.t@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Leeds",
    addressCountry: "GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
