import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PriceProvider } from "@/context/priceProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lootpaw",
  description: "Superior pet tracking, smaller, longer lasting, more accurate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PriceProvider>
      <Navbar />
      {children}
    </PriceProvider>
  );
}
