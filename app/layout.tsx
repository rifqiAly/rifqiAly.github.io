import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Delos News",
  description: "Get the best Article!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
