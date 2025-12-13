import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PropFirmFit - Premium Prop Firm Finder",
  description: "Unbiased data on the world's leading proprietary trading firms. Find your edge with our premium comparison tools.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700;800&display=swap" rel="stylesheet" />
        {/* Material Symbols */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-[#171611] dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
