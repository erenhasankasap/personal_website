import React from 'react';
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Eren Hasan Kasap',
    template: '%s | Eren Hasan Kasap',
  },
  description: 'Mathematical Engineering Student & Software Developer — building practical solutions with mathematics and software.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
