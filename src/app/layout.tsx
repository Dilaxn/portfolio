import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dilax.space"),
  title: "Dilakshan M. — Software Engineer",
  description:
    "Software engineer building reliable financial systems and thoughtful digital products with Java, Spring Boot, and modern web technologies.",
  openGraph: {
    title: "Dilakshan M. — Software Engineer",
    description:
      "I turn complex systems into fast, resilient experiences that feel beautifully simple.",
    url: "https://dilax.space",
    siteName: "Dilakshan M.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dilakshan M. — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilakshan M. — Software Engineer",
    description:
      "I turn complex systems into fast, resilient experiences that feel beautifully simple.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
