/* eslint-disable react/no-unescaped-entities */
"use client";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-black">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-3xl lg:max-w-3xl">
              {" "}
              {/* Adjusted width for desktop */}
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Pet Tracking Redefined.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Keep your pet safe with Lootpaw. Our trackers are smaller,
                  last longer, and are more accurate than the competition. With
                  LTE, GPS, and Bluetooth, you'll never lose your pet again.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Download
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-yellow-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-800 opacity-20 ring-1 ring-inset ring-gray-700 md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gray-700/50 md:rounded-3xl"
                  aria-hidden="true"
                />
                {/* Adjusted image size for desktop */}
                <Image
                  src="/cat.png"
                  alt="Cat"
                  width={600}
                  height={600}
                  className="lg:w-400 lg:h-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-gray-900 sm:h-32" />
      </div>
    </div>
  );
}
