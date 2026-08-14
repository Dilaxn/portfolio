import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dilakshan M. — Software Engineer",
  description:
    "Backend-focused Software Engineer building high-performance financial systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="bg-[#050510] text-white font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
