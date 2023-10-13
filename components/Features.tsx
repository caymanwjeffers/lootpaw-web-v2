import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Powerful Tracking
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to track your furry friend.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="flex flex-col">
              <dt className="flex flex-col gap-x-3 text-base font-semibold leading-7 text-white gap-2">
                <Image
                  width={300}
                  height={300}
                  src="/battery.png"
                  alt="Battery"
                  className="w-full h-60 object-cover flex-none text-indigo-400 rounded-t-md"
                />
                Long Lasting Battery
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                  Commodo nec sagittis tortor mauris sed. Turpis tortor quis
                  scelerisque diam id accumsan nullam tempus. Pulvinar etiam
                  lacus volutpat eu. Phasellus praesent ligula sit faucibus.
                </p>
                <p className="mt-6">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-indigo-400"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col">
              <dt className="flex flex-col gap-x-3 text-base font-semibold leading-7 text-white gap-2">
                <Image
                  width={300}
                  height={300}
                  src="/gps.png"
                  alt="GPS"
                  className="w-full h-60 object-cover flex-none text-indigo-400 rounded-t-md"
                />
                LTE and GPS Tracking
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                  Pellentesque enim a commodo malesuada turpis eleifend risus.
                  Facilisis donec placerat sapien consequat tempor fermentum
                  nibh.
                </p>
                <p className="mt-6">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-indigo-400"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col">
              <dt className="flex flex-col gap-x-3 text-base font-semibold leading-7 text-white gap-2">
                <Image
                  width={300}
                  height={300}
                  src="/waterproof.png"
                  alt="Waterproof"
                  className="w-full h-60 flex-none text-indigo-400 rounded-t-md"
                />
                Durable and Waterproof
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">
                  Pellentesque sit elit congue ante nec amet. Dolor aenean
                  curabitur viverra suspendisse iaculis eget. Nec mollis
                  placerat ultricies euismod ut condimentum.
                </p>
                <p className="mt-6">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-indigo-400"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
