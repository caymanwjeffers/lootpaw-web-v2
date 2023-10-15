/* eslint-disable react/no-unescaped-entities */
export default function Cta() {
  return (
    <div id="pre-order" className="bg-black">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pre-Order for a limited time deal.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
            Order your lootpaw collar now with no commitment for a limited time
            half-off deal. We'll notify you when we're ready to ship.
          </p>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-center">
            <form className="flex flex-col sm:flex-row gap-4 max-w-md pt-6">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Pre-Order Now!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
