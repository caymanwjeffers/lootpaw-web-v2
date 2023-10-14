/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function RealtimeTracking() {
  return (
    <div
      className="relative h-screen md:h-[600px] bg-cover bg-center flex flex-col justify-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at 90% 140%, transparent, rgba(0, 0, 0, 1) 50%), url('/map-grid.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full md:px-36 md:h-3/4 grid grid-cols-1 md:grid-cols-2">
        {/* Text Section */}
        <div className="flex flex-col justify-center px-6 py-12 md:py-0 lg:px-0 md:max-w-2xl">
          <div className="mx-auto max-w-3xl">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Real-time hyper accurate tracking.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              In an emergency, every second counts. Lootpaw's trackers update by
              the second when in lost pet mode giving reliable and accurate
              location data to ensure your pet is found as quickly as possible.
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

        {/* Image Section */}
        <div className="flex items-center justify-center py-12 md:py-0">
          <Image
            src="/cat-avatar.svg"
            alt="Cat Avatar"
            width={100} // Adjust based on your desired size
            height={100} // Adjust based on your desired size
            className="rounded-full border border-yellow-400"
          />
        </div>
      </div>
    </div>
  );
}
