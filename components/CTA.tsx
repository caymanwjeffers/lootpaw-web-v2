/* eslint-disable react/no-unescaped-entities */
export default function Cta() {
  return (
    <div className="bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pre-Order for a limited time deal.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
            Order your lootpaw collar now with no commitment for a limited time
            half-off deal. We'll notify you when we're ready to ship.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Pre-Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
