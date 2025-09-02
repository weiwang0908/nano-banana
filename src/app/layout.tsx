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
  title: "Nano Banana - AI Image Generation Learning Hub",
  description: "Master Nano Banana AI image generation with comprehensive tutorials, interactive tools, and expert guidance. Learn from 50+ tutorials, try interactive tools, and explore thousands of examples.",
  keywords: "nano banana, nano banana tutorial, nano banana guide, AI image generation, nano banana parameters, nano banana settings, nano banana vs midjourney, AI art tutorial",
  authors: [{ name: "Nano Banana Team" }],
  creator: "Nano Banana",
  publisher: "Nano Banana",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nanobanana.com",
    title: "Nano Banana - AI Image Generation Learning Hub",
    description: "Master Nano Banana AI image generation with comprehensive tutorials, interactive tools, and expert guidance.",
    siteName: "Nano Banana",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nano Banana - AI Image Generation Learning Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nano Banana - AI Image Generation Learning Hub",
    description: "Master Nano Banana AI image generation with comprehensive tutorials, interactive tools, and expert guidance.",
    images: ["/og-image.jpg"],
    creator: "@nanobanana",
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
