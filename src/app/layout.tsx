// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Red Creek School Counselors' Keys",
  description: "Official site",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:rounded focus:bg-white focus:p-2">
          Skip to main content
        </a>

        {/* Global header goes here if/when you add one */}
        {/* <Header /> */}

        <main id="main" className="min-h-screen">{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}

