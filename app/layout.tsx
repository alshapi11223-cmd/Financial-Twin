import type { Metadata } from "next";
import "./globals.css";

import { IBM_Plex_Sans_Arabic } from "next/font/google";

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
});

export const metadata: Metadata = {
  title: "NAWA",
  description: "AI-powered Financial Twin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${ibmArabic.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
