import type { Metadata, Viewport } from "next";

import "@/lib/env";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zenith Finance",
  description:
    "A calm, AI-native financial operating system for shared finance and long-term awareness.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#123f43",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
