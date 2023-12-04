/* eslint-disable react/no-unescaped-entities */
import { features } from "@/constants";

export default function Features() {
  return (
    <div
      id="features"
      className="bg-gradient-to-b from-black to-gray-90 py-24 sm:pt-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-400">
            Superior Tracking
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to reliably track your pet.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Other advanced trackers are bulky, have short battery life, don't
            update for hours, or come with a hefty price tag. Lootpaw is the
            first to have it all, so you don't have to compromise.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features
              .filter((f) => f.frontpage)
              .map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon
                      className="h-5 w-5 flex-none text-yellow-400"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
