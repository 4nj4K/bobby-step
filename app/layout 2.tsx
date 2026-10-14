import type { Metadata } from "next";
import { Badeen_Display, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const badeenDisplay = Badeen_Display({
  weight: "400",
  subsets: ["arabic", "latin"],
  variable: "--font-badeen",
});

export const metadata: Metadata = {
  title: "BobbyStep",
  description: "Hundpromenader för familjen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html lang="sv">
      <body className={`${badeenDisplay.variable} antialiased`}>
        {children}  
      </body>
    </html>
  );
}