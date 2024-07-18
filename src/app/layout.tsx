import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import * as React from "react";
import { cn } from "@/lib/utils";
import { config } from "@/config";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const listKeywords = () => {
  const keywords = [];

  keywords.push(config.personal.name);
  keywords.push(config.personal.fullName);
  keywords.push(config.seo.title);
  keywords.push(config.seo.description);
  
  return keywords;
}


export const metadata: Metadata = {
  title: config.personal.fullName,
  description: config.seo.description,
  keywords: listKeywords(),
  creator: config.personal.fullName,
  openGraph: {
    type: "website",
    url: config.url,
    description: config.seo.description,
  }
};

import Header from "@/components/header";
import Divider from "@/components/divider";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={config.url} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          <Divider />

          {children}

          <div className="mt-[200px] w-full">
            <Divider />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
