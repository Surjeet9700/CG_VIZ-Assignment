import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3DIMLI - Your one-stop digital platform for 3D models",
  description: "Sell 3D Models, E-books, and digital products effortlessly",
  icons: {
    icon: '/Favicon.svg',
    shortcut: '/Favicon.svg',
    apple: '/Favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Favicon for browser tab */}
        <link rel="icon" href="/Favicon.svg" type="image/svg+xml" />
        {/* Preload Google Fonts for faster rendering */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
