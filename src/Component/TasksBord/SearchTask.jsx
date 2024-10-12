/* eslint-disable react/prop-types */
import { useState } from "react";
import SearchBoxSvg from "./SearchBoxSvg";

export default function SearchBox({ onScarch }) {
  const [scarchTram, setScarchTram] = useState("");
  function handleScarch() {
    event.preventDefault();
    onScarch(scarchTram);
  }
  return (
    <form>
      <div className="flex">
        <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
            placeholder="Search Task"
            value={scarchTram}
            onChange={() => setScarchTram(event.target.value)}
            required
          />
          <button
            type="submit"
            className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
            onClick={handleScarch}
          >
            <SearchBoxSvg />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}
