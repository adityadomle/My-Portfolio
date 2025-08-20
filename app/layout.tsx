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
  title: "Portfolio of Aditya",
  description:
    "Portfolio of Aditya Domle - Software Developer specializing in modern web technologies",
  keywords: [
    "Aditya Domle",
    "Aditya",
    "Domle",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  openGraph: {
    title: "Portfolio of Aditya",
    description:
      "Portfolio of Aditya Domle - Software Developer specializing in modern web technologies",
    type: "website",
    url: "imaditya.in",
    siteName: "Aditya Domle",
    locale: "en_US",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Aditya Domle - Full Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Aditya Domle - Full Stack Developer",
    description:
      "Portfolio of Aditya Domle - Software Developer specializing in modern web technologies",
    card: "summary_large_image",
    site: "@domle_aditya",
    creator: "@domle_aditya",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Aditya Domle - Full Stack Developer",
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
