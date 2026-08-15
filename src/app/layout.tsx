import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dilax.space"),
  title: "Dilaxn — Software Engineer & Product Explorer",
  description:
    "A personal engineering lab exploring reliable systems, thoughtful products, and calm digital experiences.",
  openGraph: {
    title: "Dilaxn — Software Engineer & Product Explorer",
    description:
      "A personal lab for complex systems, quiet interfaces, and useful experiments.",
    url: "https://dilax.space",
    siteName: "Dilaxn",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dilaxn — Software Engineer and Product Explorer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilaxn — Software Engineer & Product Explorer",
    description:
      "A personal lab for complex systems, quiet interfaces, and useful experiments.",
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
