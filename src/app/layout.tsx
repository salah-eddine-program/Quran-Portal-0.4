import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "بوابة القرآن الكريم",
  description: "بوابة عربية للقراءة والاستماع والبحث والمراجعة، مع مواقيت الصلاة وأدوات القبلة والسبحة.",
  applicationName: "بوابة القرآن الكريم",
  keywords: ["القرآن الكريم", "المصحف", "التلاوات", "التفسير", "مواقيت الصلاة", "القبلة"],
  openGraph: {
    type: "website",
    locale: "ar_AR",
    title: "بوابة القرآن الكريم",
    description: "قراءة واستماع وبحث ومراجعة في واجهة عربية متجاوبة.",
    siteName: "بوابة القرآن الكريم",
  },
  twitter: { card: "summary", title: "بوابة القرآن الكريم", description: "قراءة واستماع ومراجعة في واجهة عربية." },
  robots: { index: true, follow: true },
  icons: { icon: `${basePath}/assets/images/icon.svg` },
  manifest: `${basePath}/manifest.webmanifest`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#102f27",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
    <body>{children}</body>
    </html>
  );
}
