import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ada Restaurant — Lakefront Dining in Uzungöl, Trabzon",
  description: "Premium lakefront restaurant in Uzungöl serving Black Sea favorites, Turkish classics, and select Middle Eastern dishes. Open daily. Reserve by phone or WhatsApp.",
  keywords: "Ada Restaurant, Uzungöl, Trabzon, Black Sea cuisine, Turkish restaurant, lakefront dining",
  openGraph: {
    title: "Ada Restaurant, Uzungöl",
    description: "Premium lakefront dining in the heart of Uzungöl",
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR", "ar_AR"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${inter.variable} ${playfair.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
