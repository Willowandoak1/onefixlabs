import type { Metadata, Viewport } from "next";
import "./globals.css";
import TrackingPixel from "./components/TrackingPixel";

export const metadata: Metadata = {
  title: "OneFix Labs - Hair Regrowth System",
  description: "Advanced hair regrowth system with micro-infusion technology. Stop hair loss and regrow thicker hair naturally.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="bg-white antialiased">
        {children}
        <TrackingPixel />
      </body>
    </html>
  );
}
