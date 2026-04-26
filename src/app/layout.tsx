import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://mindnest.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MindNest – Temukan Bacaan yang Mengubah Hidupmu",
    template: "%s | MindNest",
  },
  description:
    "MindNest adalah kurasi buku pilihan terbaik untuk memperluas wawasan dan mengubah perspektif hidupmu. Temukan rekomendasi buku terpercaya dalam berbagai genre.",
  keywords: [
    "rekomendasi buku",
    "buku terbaik",
    "buku pengembangan diri",
    "buku indonesia",
    "buku inspiratif",
    "review buku",
  ],
  authors: [{ name: "MindNest" }],
  creator: "MindNest",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "MindNest",
    title: "MindNest – Temukan Bacaan yang Mengubah Hidupmu",
    description:
      "Kurasi buku pilihan terbaik untuk memperluas wawasan dan mengubah perspektif hidupmu.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MindNest – Temukan Bacaan yang Mengubah Hidupmu",
    description:
      "Kurasi buku pilihan terbaik untuk memperluas wawasan dan mengubah perspektif hidupmu.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-cream-100 font-sans text-forest-700 antialiased">
        {/* Skip to content for accessibility */}
        <a
          href="#konten-utama"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-forest-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none focus:shadow-lg"
        >
          Lewati ke konten utama
        </a>
        <Header />
        <main id="konten-utama" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
