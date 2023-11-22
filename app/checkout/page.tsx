/* eslint-disable @next/next/no-img-element */
"use client";
import { features } from "@/constants";
import { usePrice } from "@/context/priceProvider";
import { domain } from "@/environment";
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
    <div className="p-6 pt-20 bg-gray-950 min-h-screen">
      <div className="mb-6 mt-8">
        <p className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
          {products?.[0].name ?? "loading..."}
        </p>
        <p className="text-xl text-gray-200">${products?.[0].price ?? "..."}</p>
      </div>
      <img
        width={600}
        height={400}
        alt="Lootpaw Pet Tracker"
        src="/mobile-01.webp"
        className="rounded-xl shadow-sm"
      />

      <div className="flex flex-col gap-y-2 mt-8">
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
        <LoadingButton isLoading={isLoading} onClick={createCheckoutSession}>
          Buy Now
        </LoadingButton>
      </div>
    </div>
  );
}

const LoadingButton = (props: any) => {
  const { children, isLoading, ...other } = props;
  return (
    <button
      disabled={isLoading}
      className={`w-full text-sm font-bold px-4 py-2 rounded-md text-black bg-yellow-500 ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      {...other}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export const Spinner = ({ size }: { size?: number }) => {
  return (
    <svg
      aria-hidden="true"
      role="status"
      className={`inline w-4 h-4 text-white animate-spin`}
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="#E5E7EB"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentColor"
      />
    </svg>
  );
};
