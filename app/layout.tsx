import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7QZC2CFM7Q"></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7QZC2CFM7Q');`}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
