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
  title: "Betar Media — Podcast & Video Production, Western Sydney",
  description:
    "Betar Media helps business owners convert their expertise into high-quality podcast and video content that builds authority, trust, and generates leads. Western Sydney's #1 mobile podcast studio.",
  keywords: "podcast production, video production, Western Sydney, content marketing, podcast studio",
  openGraph: {
    title: "Betar Media — Podcast & Video Production",
    description: "Turn your expertise into content that works. Western Sydney's mobile podcast and video studio.",
    type: "website",
    url: "https://betarmedia.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-[#0A0A0A] text-[#F5F0E8] min-h-screen">{children}</body>
    </html>
  );
}
