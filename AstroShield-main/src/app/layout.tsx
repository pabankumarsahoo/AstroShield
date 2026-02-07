import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "AstroWatch",
  description: "Track near-Earth objects & cosmic events in real-time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased`">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
