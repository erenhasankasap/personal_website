import React from 'react';
import "./globals.css";
import Footer from "../components/Footer.tsx"
import 'katex/dist/katex.min.css';

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
