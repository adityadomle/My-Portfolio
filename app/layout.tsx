import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pritam Ghosh",
  description:
    "Portfolio of Pritam Ghosh - Software Developer specializing in modern web technologies",
  keywords: [
    "Pritam Ghosh",
    "Pritam",
    "Ghosh",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  openGraph: {
    title: "Pritam Ghosh - Full Stack Developer",
    description:
      "Portfolio of Pritam Ghosh - Software Developer specializing in modern web technologies",
    type: "website",
    url: "https://pritam.tech",
    siteName: "Pritam Ghosh",
    locale: "en_US",
    images: [
      {
        url: "https://pritam.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pritam Ghosh - Full Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Pritam Ghosh - Full Stack Developer",
    description:
      "Portfolio of Pritam Ghosh - Software Developer specializing in modern web technologies",
    card: "summary_large_image",
    site: "@PritamGhosh010",
    creator: "@PritamGhosh010",
    images: [
      {
        url: "https://pritam.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pritam Ghosh - Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
