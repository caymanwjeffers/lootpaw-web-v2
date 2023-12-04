/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Ghost } from "@/components/ui/ghost";
import { features } from "@/constants";
import { usePrice } from "@/context/priceProvider";
import { domain } from "@/environment/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
  const router = useRouter();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const { products, isLoading: isPriceDataLoading } = usePrice();
  const [itemCount, setItemCount] = useState(1);

  const isLoading = checkoutLoading || isPriceDataLoading;

  const handleIncrement = () => {
    setItemCount(itemCount + 1);
  };

  const handleDecrement = () => {
    if (itemCount <= 1) return;
    setItemCount(itemCount - 1);
  };

  const createCheckoutSession = async () => {
    setCheckoutLoading(true);
    try {
      const res = await fetch(`${domain}/stripe/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: itemCount,
          priceId: products?.[0].priceId,
          productId: products?.[0].productId,
        }),
      });
      const url = await res.text();
      router.push(url);
    } catch (err) {
      console.log({ err });
    }
    setCheckoutLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-x-12 min-h-screen p-6 pt-20 bg-gray-950">
      <div id="section-1" className="flex flex-col md:w-1/2">
        <div className="mb-6 mt-8 flex flex-col gap-y-2">
          {isLoading ? (
            <Ghost width="3/4" height="10" />
          ) : (
            <p className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
              {products?.[0].name}
            </p>
          )}
          {isLoading ? (
            <Ghost width="32" height="5" />
          ) : (
            <p className="text-xl text-gray-200">${products?.[0].price}</p>
          )}
        </div>
        <img
          width={600}
          height={400}
          alt="Lootpaw Pet Tracker"
          src="/mobile-01.webp"
          className="rounded-xl shadow-sm"
        />
      </div>

      <div id="section-2" className="md:flex-1 md:gap-y-auto">
        <div className="flex flex-col gap-y-2 mt-8 md:mt-32">
          {features.map((feature) => (
            <div key={feature.name} className="flex gap-x-4 w-full ">
              <dt className="flex items-center gap-x-4 text-base font-normal leading-7 text-white">
                <feature.icon
                  className="h-10 w-10 flex-none text-gray-300 rounded-full p-2"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between my-8">
            <button
              onClick={handleDecrement}
              className="rounded-md bg-gray-900 px-4"
            >
              -
            </button>
            <p className="font-bold text-xl">{itemCount}</p>
            <button
              onClick={handleIncrement}
              className="rounded-md bg-gray-900 px-4"
            >
              +
            </button>
          </div>
          <Button isLoading={isLoading} onClick={createCheckoutSession}>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}
