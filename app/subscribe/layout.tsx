import Navbar from "@/components/Navbar";
import { PriceProvider } from "@/context/priceProvider";

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
