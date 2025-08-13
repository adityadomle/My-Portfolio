import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400", "700", '900'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}


export const metadata: Metadata = {
  title: {
    default: 'Aditya Domle | Frontend Developer based in Maharashtra, India',
    template: '%s - Aditya Domle',
  },
  description: 'Explore the portfolio of Aditya Domle based in Maharashtra, a skilled React/Next.js Developer. Discover expertise in ReactJS, NextJS, Redux, TailwindCSS, and modern frontend technologies showcased through innovative web development projects.',

  icons: {
    icon: './favicon.ico',
  },
  applicationName: 'Frontend Portfolio by Aditya Domle',
  authors: [
    {
      name: 'Aditya Domle',
      url: 'https://www.linkedin.com/in/adityadomle/',
    },
  ],
  generator: 'Next.js',
  referrer: 'origin',
  themeColor: '#120012',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
  creator: 'Aditya Domle',
  publisher: 'Aditya Domle',
};
