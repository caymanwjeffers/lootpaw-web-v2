/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-black relative isolate overflow-hidden bg-gradient-to-b from-gray-950 min-h-screen">
      <div className="mx-auto max-w-7xl pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-0 lg:py-40 items-center grid grid-cols-1 md:grid-cols-2">
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-xl lg:mx-0 lg:mt-0 lg:w-screen order-1 md:order-2">
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
              <Image
                src="/cat.png"
                alt="Cat"
                width={300} // Smaller size for mobile
                height={300}
                className="w-full h-full md:w-400 md:h-400"
              />
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-0 lg:pt-4 order-2 md:order-1">
          <div className="mx-auto max-w-3xl lg:max-w-3xl">
            <div className="max-w-lg">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Pet Tracking Redefined.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                A game changer for small and large pet owners alike. With long
                lasting battery, real time tracking, and a small sleek build,
                you'll never have to worry about losing your pet.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#pre-order"
                  className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Pre-Order Now
                </a>
                <a
                  href="#features"
                  className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
                >
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
