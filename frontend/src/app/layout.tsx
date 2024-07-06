import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";
import { Toaster } from "@/components/ui/toaster";
import Providers from '../providers';
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memefrax",
  description: "where to get your memes",
  icons: {
    icon: "/svg/smile2.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased flex flex-col min-h-screen bg-[#fffdd0] `}
      >
        <Providers>
        <Header />
        {children}
        <Footer />
        <Toaster />
        </Providers>
      </body>
    </html>
  );
}
