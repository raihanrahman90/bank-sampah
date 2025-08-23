import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SIPILAH – Bank Sampah Samarinda",
    template: "SIPILAH – Bank Sampah Samarinda",
  },
  description: "Aplikasi SIPILAH membantu memilah sampah, cek harga sampah, dan lokasi bank sampah di Samarinda.",
  keywords: ["bank sampah", "pilah sampah", "SIPILAH", "lingkungan", "daur ulang", "Samarinda"],
  authors: [{ name: "SIPILAH Team" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "SIPILAH – Bank Sampah Samarinda",
    description: "Mari jaga bumi dari rumah dengan SIPILAH. Pilah sampah dan dukung lingkungan bersih.",
    url: "https://example.com",
    siteName: "SIPILAH",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "SIPILAH Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIPILAH – Bank Sampah Samarinda",
    description: "Aplikasi SIPILAH untuk memilah sampah dan mendukung lingkungan bersih.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
