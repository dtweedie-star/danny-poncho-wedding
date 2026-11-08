import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danny & Poncho — Malta 20.05.28",
  description: "Danny & Poncho are getting married in Malta on 20 May 2028.",
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
