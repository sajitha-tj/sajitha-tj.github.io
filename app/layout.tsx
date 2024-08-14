import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sajitha Jayawickrama",
  description: "Hey! I'm Sajitha Jayawickrama, a B.Sc. undergraduate at Computer Science and Engineering (specializing cybersecurity), University of Moratuwa. I am a cybersecurity enthusiast, a software engineer and a graphic designer. This is my personal portfolio showcasing projects and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
