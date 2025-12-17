import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/metadata";
import { buildBookJsonLd } from "@/lib/schema";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import MobileCtaBar from "@/components/ui/MobileCtaBar";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = buildBookJsonLd();
  return (
    <html lang="pl">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <div className="page-shell">
          <a className="skip-link" href="#main-content">
            Przejdź do treści
          </a>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <ScrollProgressBar />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <MobileCtaBar />
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
