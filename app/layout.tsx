import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "News",
  description: "Get the best Article!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>{children}</body>
    </html>
  );
}
