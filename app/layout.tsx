import "./assets/globals.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rich Text Editor",
  description: "Generated by Next.js and TipTap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-24">{children}</body>
    </html>
  );
}
