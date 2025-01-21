import type { Metadata } from "next";
import { Libre_Baskerville, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600']
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "About Us",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} ${libreBaskerville.className} antialiased leading-8 overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
