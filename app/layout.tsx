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
  title: "Heaven Overseas | Study in Germany - Free Tuition Universities",
  description:
    "Heaven Overseas helps Indian students study in Germany at top public universities with zero or low tuition fees. Free counseling, admission, visa, and accommodation support.",
  keywords: [
    "Study in Germany",
    "Heaven Overseas",
    "Germany student visa",
    "Germany public universities",
    "MS in Germany",
    "Bachelors in Germany",
    "Free education Germany",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
