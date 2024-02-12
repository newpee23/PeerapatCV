import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsBackground from "@/components/main/StarsBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peerapat Portfolio",
  description: "Developer Portfolio By Peerapat Mueangmo",
  keywords: ["Fullstack Developer", "Reactjs Developer", "Nodejs Developer", "Developer", "Portfolio", "Developer Portflio", "Peerapat Mueangmo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}>
        <StarsBackground />
        {children}
      </body>
    </html>
  );
}
