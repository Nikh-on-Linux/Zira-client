import type { Metadata } from "next";
import { Syne } from "next/font/google";
// @ts-ignore: no type declarations for CSS side-effect import
import "./globals.css";
import {
  TransitionProvider,
} from "@/components/transitionprovider";
import ClientLayout from "./clientlayout";

const geistSans = Syne({
  variable: "--font-syne-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zira",
  description: "Smart data manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} font-sans w-screen h-screen flex justify-center items-center antialiased`}
      >
        <TransitionProvider>
          <ClientLayout>{children}</ClientLayout>
        </TransitionProvider>
      </body>
    </html>
  );
}
