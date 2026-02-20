import React from 'react';
import "./globals.css";
import Footer from "../components/Footer.tsx"

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
