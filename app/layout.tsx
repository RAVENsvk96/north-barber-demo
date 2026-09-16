import type { Metadata } from "next";
import { Bodoni_Moda, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "latin-ext"] });
const bodoni = Bodoni_Moda({ variable: "--font-bodoni", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = "https://north-barber-demo-two.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NORTH Barber Studio — demo web | Samuel Zelíska",
    template: "%s | Demo web Samuela Zelísku",
  },
  description:
    "Samostatne vytvorený ukážkový koncept webovej stránky pre barber štúdio. Nejde o skutočnú prevádzku ani ponuku služieb.",
  applicationName: "NORTH Barber Studio — demo projekt",
  category: "Portfolio demo",
  authors: [{ name: "Samuel Zelíska", url: "https://www.samuelzeliska.sk" }],
  openGraph: {
    title: "NORTH Barber Studio — ukážkový webový koncept",
    description:
      "Demo projekt vytvorený na prezentáciu webového dizajnu a vývoja. Nejde o skutočné barber štúdio.",
    url: siteUrl,
    siteName: "Portfolio demo Samuela Zelísku",
    images: [{
      url: "/images/og-image.png",
      width: 1200,
      height: 630,
      alt: "Ukážkový koncept webu barber štúdia",
    }],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NORTH Barber Studio — ukážkový webový koncept",
    description: "Demo projekt Samuela Zelísku. Nejde o skutočné barber štúdio.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk" className={`${manrope.variable} ${bodoni.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-[#F7F5F2] text-[#111111]">{children}</body>
    </html>
  );
}
