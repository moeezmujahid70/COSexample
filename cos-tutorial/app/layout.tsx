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
  icons: {
    icon: [
      { url: "/assets/favicon/favicon_64.png", sizes: "64x64", type: "image/png" },
      { url: "/assets/favicon/favicon_256.png", sizes: "256x256", type: "image/png" },
      { url: "/assets/favicon/favicon_512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/app/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/assets/favicon/favicon_64.png"],
  },
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
