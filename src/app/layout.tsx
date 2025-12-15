
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});



export const metadata: Metadata = {
  title: "PropFirmFit - Premium Prop Firm Finder",
  description: "Unbiased data on the world's leading proprietary trading firms. Find your edge with our premium comparison tools.",
  keywords: [
    "prop firm",
    "trading",
    "comparison",
    "premium",
    "proprietary trading"
  ],
  openGraph: {
    title: "PropFirmFit - Premium Prop Firm Finder",
    description: "Unbiased data on the world's leading proprietary trading firms. Find your edge with our premium comparison tools.",
    images: ["/og-image.png"],
    url: "https://propfirmfit.com/",
    siteName: "PropFirmFit",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PropFirmFit - Premium Prop Firm Finder",
    description: "Unbiased data on the world's leading proprietary trading firms. Find your edge with our premium comparison tools.",
    images: ["/twitter-image.png"]
  },
  alternates: {
    canonical: "https://propfirmfit.com/"
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} dark`}>
      <head>
        {/* Material Symbols */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-[#171611] dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
