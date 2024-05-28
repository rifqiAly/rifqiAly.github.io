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
    <html lang="en" className="light">
      <body className='relative'>
        <Navbar />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
