import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { config } from "@/config";

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(config.baseUrl),
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  authors: [{ name: "Subham Mahapatra" }],
  creator: "Subham Mahapatra",
  publisher: config.organization,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.baseUrl,
    siteName: config.title,
    title: config.title,
    description: config.description,
    images: [
      {
        url: config.logoUrl,
        width: 1200,
        height: 630,
        alt: config.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description,
    images: [config.logoUrl],
    creator: "@devxsubh",
    site: "@devxsubh",
  },
  alternates: {
    canonical: config.baseUrl,
  },
  other: {
    "linkedin:owner": config.social.linkedin,
    "github:owner": config.social.github,
  },
  verification: {
    other: {
      "github": config.social.github,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased font-sans`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
