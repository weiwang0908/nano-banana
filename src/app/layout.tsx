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
  title: "Nano Banana - 专业AI图像生成工具",
  description: "Nano Banana是专业的AI图像生成工具，支持自然语言编辑、角色一致性保持和场景保留。为设计师、艺术家和内容创作者提供强大的创作支持。",
  keywords: "nano banana, AI图像生成, 人工智能, 图像创作, 角色一致性, 场景保留, 自然语言编辑, AI工具, 图像设计",
  authors: [{ name: "Nano Banana Team" }],
  creator: "Nano Banana",
  publisher: "Nano Banana",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://nanobanana.ai",
    title: "Nano Banana - 专业AI图像生成工具",
    description: "专业的AI图像生成工具，支持自然语言编辑、角色一致性保持和场景保留。",
    siteName: "Nano Banana",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nano Banana - 专业AI图像生成工具",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nano Banana - 专业AI图像生成工具",
    description: "专业的AI图像生成工具，支持自然语言编辑、角色一致性保持和场景保留。",
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
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
