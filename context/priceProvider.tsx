"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { domain } from "@/environment";
interface ISubscriptionPrice {
  name: string;
  monthlyPrice: number;
  productId: string; // called productId because subscriptions are considered products in stripe until they are applied to a customer and become a subscription.
  priceId: string;
}

interface IProductPrice {
  name: string;
  price: number;
  productId: string;
  priceId: string;
}

interface IPriceData {
  products: IProductPrice[];
  subscriptions: ISubscriptionPrice[];
  isLoading: boolean;
}

const PriceContext = createContext<IPriceData>({} as any);

export function PriceProvider({ children }: { children: ReactNode }) {
  const [isLoading, setLoading] = useState(true);
  const [priceData, setPriceData] = useState<IPriceData>({} as any);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(`${domain}/stripe/prices`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setPriceData(data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log({ error });
    }
  }, []);
  return (
    <PriceContext.Provider value={{ ...priceData, isLoading }}>
      {children}
    </PriceContext.Provider>
  );
}

export function usePrice() {
  const prices = useContext(PriceContext);
  if (prices === undefined) {
    throw new Error("usePrice must be used within a PriceProvider");
  }
  return prices;
}
