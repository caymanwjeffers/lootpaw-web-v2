/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Airtag() {
  return (
    <div className="bg-black relative isolate overflow-hidden bg-gradient-to-b from-gray-950 min-h-screen">
      <div className="mx-auto max-w-7xl pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-0 lg:py-40 items-center grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center mt-20 sm:mt-24 md:mx-auto md:max-w-xl lg:mx-0 lg:mt-0 lg:w-screen order-1 md:order-2">
          <div className="shadow-lg md:rounded-3xl">
            <Image
              src="/airtag-x.png"
              alt="AirTag"
              width={500} // Smaller size for mobile
              height={500}
              className="w-96 h-96"
            />
          </div>
        </div>

        <div className="px-6 lg:px-0 lg:pt-4 order-2 md:order-1">
          <div className="mx-auto max-w-3xl lg:max-w-3xl">
            <div className="max-w-lg">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Want reliable? Forget about Airtag.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Airtags are unreliable and must be with a 200 feet of an iPhone
                to work. Lootpaw uses advanced GPS and LTE technology to ensure
                your pet is always found, even when they make a run for it.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Pre-Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
