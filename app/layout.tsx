// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

import { Lexend } from "next/font/google";
import ClientLayout from "./client-layout";
import RootLayoutComponent from "components/layout/RootLayout";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

const siteUrl = "https://melamedlawpllc-v2-website.vercel.app/";
const ogImageUrl = `${siteUrl}/og-image.png`;

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  title: "Melamed Law Firm",
  description: "Melamed Law Firm Website",
  metadataBase: new URL("https://melamedlawpllc-v2-website.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${lexend.className}`}>
      <body>
        {/* NoScript Fallback */}
        <noscript>
          <style>
            {`
              * {
                opacity: 1 !important;
                transform: none !important;
              }
            `}
          </style>
        </noscript>

        <RootLayoutComponent>
          <Navbar />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
        </RootLayoutComponent>
      </body>
    </html>
  );
}
