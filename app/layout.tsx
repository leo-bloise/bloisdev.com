import type { Metadata } from "next";
import { Domine } from 'next/font/google';
import "./globals.css";
import RotatingCube from "@/components/RotatingCube";

const domine = Domine({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "bloisdev.com",
  description: "My own personal blog where I talk about everything I want (mainly development).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={domine.className}>
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
