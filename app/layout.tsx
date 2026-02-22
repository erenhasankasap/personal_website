import React from 'react';
import "./globals.css";
import Footer from "../components/Footer"
import 'katex/dist/katex.min.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eren Hasan Kasap Portfolio',
  description: 'Mathematical Engineering Student & Software Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en">
  <body>{children}
  <Footer />
      </body>
    
  </html>
  );
}
