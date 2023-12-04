"use client";
import { Button } from "@/components/ui/button";
import { subscriptionFeatures } from "@/constants";
import { usePrice } from "@/context/priceProvider";
import { domain } from "@/environment/client";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export interface ISubscriptionPrice {
  name: string;
  monthlyPrice: number;
  interval: "month" | "year";
  productId: string; // called productId because subscriptions are considered products in stripe until they are applied to a customer and become a subscription.
  priceId: string;
  altDescription: string;
}
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Subscribe() {
  const { userId, collarId } = useParams();
  console.log({ userId, collarId });
  const router = useRouter();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const { subscriptions, isLoading: isPriceDataLoading } = usePrice();
  const isLoading = checkoutLoading || isPriceDataLoading;

  const handleSubscribe = async (subscription: ISubscriptionPrice) => {
    setCheckoutLoading(true);
    try {
      const res = await fetch(`${domain}/stripe/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: subscription.priceId,
          productId: subscription.productId,
          userId,
          collarId,
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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-400">
            Purchase a Subscription
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Unlimited LTE, GPS, and real time tracking.
          </p>
        </div>
        <div className="isolate mx-auto mt-20 grid grid-cols-1 gap-8 lg:mx-0 md:max-w-none md:grid-cols-2">
          {!isLoading &&
            subscriptions.map((subscription, index) => (
              <div
                key={subscription.priceId}
                className={classNames(
                  "rounded-3xl p-8 xl:p-10",
                  subscription.interval === "year"
                    ? "bg-white/5 ring-2 ring-yellow-500"
                    : "ring-1 ring-white/10"
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-white">
                    {subscription.name}
                  </h3>
                  {subscription.interval === "year" && (
                    <p className="rounded-full bg-yellow-500 px-2.5 py-1 text-xs font-semibold leading-5 text-black min-w-50">
                      Best Deal
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">
                  {subscription.altDescription}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    $
                    {subscription.interval === "year"
                      ? subscription.monthlyPrice
                      : subscription.monthlyPrice}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">
                    /month
                  </span>
                </p>
                <span className="text-sm font-semibold leading-6 text-gray-300">
                  {subscription.interval === "year"
                    ? "$" +
                      subscription.monthlyPrice * 12 +
                      " " +
                      "Billed annually"
                    : "$" + subscription.monthlyPrice + " " + "Billed monthly"}
                </span>
                <div className="mt-6">
                  <Button
                    onClick={() => handleSubscribe(subscription)}
                    isLoading={isLoading}
                  >
                    Purchase
                  </Button>
                </div>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
                >
                  {subscriptionFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-white"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
