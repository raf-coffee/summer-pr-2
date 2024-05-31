function App() {
  return (
    <main className="max-w-7xl mx-auto flex flex-col items-center min-h-dvh">
      <div className="flex flex-col min-w-52 mt-20 max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-4 bg-blue-400 p-4">
        <div className="text-white font text-lg flex flex-wrap gap-1 sm:text-2xl">
          <p>Where does it come from?</p>
          <p>Why do we use it?</p>
        </div>
        <div className="flex flex-col sm:flex-col-reverse lg:flex-row-reverse lg:justify-between">
          <form className="flex flex-col gap-4 my-4 md:flex-row lg:2/3">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 md:w-2/3">
              <div className="relative lg:w-[49%]">
                <input
                  type={"text"}
                  name="departDate"
                  placeholder="Depart date"
                  className="p-2 w-full rounded sm:h-14 sm:text-xl lg:h-full lg:text-lg"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="absolute right-2 bottom-1/2 translate-y-1/2 text-blue-400"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h16" />
                  <path d="M19 22v-6" />
                  <path d="M22 19l-3 -3l-3 3" />
                </svg>
              </div>
              <div className="relative lg:w-[49%]">
                <input
                  type={"text"}
                  name="returnDate"
                  placeholder="Return date"
                  className="p-2 w-full rounded sm:h-14 sm:text-xl lg:h-full lg:text-lg"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="absolute right-2 bottom-1/2 translate-y-1/2 text-blue-400"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
                  <path d="M19 16v6" />
                  <path d="M22 19l-3 3l-3 -3" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h16" />
                </svg>
              </div>
            </div>
            <button className="uppercase text-white bg-orange-400 py-4 sm:py-2 lg:py-0 sm:text-2xl md:w-[40%]">
              Search
            </button>
          </form>
          <p className="text-white sm:my-4 lg:w-1/3 lg:text-balance">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </main>
  );
}
export default App;
