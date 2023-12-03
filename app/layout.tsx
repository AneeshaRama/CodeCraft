import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code craft",
  description: "Next Generation online code compiler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
