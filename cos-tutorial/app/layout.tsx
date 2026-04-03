import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Our R&D Team Culture",
  description: "Interactive Culture Operating System tutorial for our R&D team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body>
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
      </body>
    </html>
  );
}
