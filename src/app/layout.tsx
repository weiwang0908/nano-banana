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
  title: "Nano Banana - Professional AI Image Generation Tool",
  description: "Nano Banana is a professional AI image generation tool that supports natural language editing, character consistency, and scene retention. Provides powerful creative support for designers, artists, and content creators.",
  keywords: "nano banana, AI image generation, artificial intelligence, image creation, character consistency, scene retention, natural language editing, AI tools, image design",
  authors: [{ name: "Nano Banana Team" }],
  creator: "Nano Banana",
  publisher: "Nano Banana",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nanobanana.ai",
    title: "Nano Banana - Professional AI Image Generation Tool",
    description: "Professional AI image generation tool that supports natural language editing, character consistency, and scene retention.",
    siteName: "Nano Banana",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nano Banana - Professional AI Image Generation Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nano Banana - Professional AI Image Generation Tool",
    description: "Professional AI image generation tool that supports natural language editing, character consistency, and scene retention.",
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