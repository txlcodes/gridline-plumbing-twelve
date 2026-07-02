import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import ChatBot from "@/components/ChatBot";
import { site } from "@/lib/site";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gridlineplumbing.com"),
  title: {
    default: "Gridline Plumbing | Licensed Plumber in Aurora, CO",
    template: "%s | Gridline Plumbing",
  },
  description:
    "Gridline Plumbing is a licensed, insured plumbing company serving Aurora and the south Denver metro. Repipes, drain & sewer, water heaters, leak detection & 24/7 emergency service. Upfront pricing, guaranteed work.",
  keywords: [
    "plumber Aurora CO",
    "Aurora plumbing company",
    "emergency plumber Aurora",
    "water heater repair Aurora",
    "drain cleaning Aurora",
    "sewer line repair Denver metro",
    "repipe Aurora Colorado",
    "leak detection Aurora",
  ],
  openGraph: {
    title: "Gridline Plumbing | Licensed Plumber in Aurora, CO",
    description:
      "Repipes, drain & sewer, water heaters, leak detection & 24/7 emergency plumbing across Aurora and the south Denver metro. Upfront pricing, guaranteed work.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-slate">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCall />
        <ChatBot />
      </body>
    </html>
  );
}
