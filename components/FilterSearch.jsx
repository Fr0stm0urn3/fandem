"use client"

import { useState, useEffect } from "react"

const FilterSearch = () => {
  const [category, setCategory] = useState("all")

  return (
    <div className="text-black container mx-auto flex justify-between py-4 lg:py-0 mb-[32px] lg:mb-[76px]">
      <ul className="flex text-[#898888] list-none gap-[46px] px-4">
        <li
          onClick={() => setCategory("all")}
          className={`${
            category === "all"
              ? "text-[#1B1A1A] border-b pb-[11px] border-b-[#1B1A1A] "
              : ""
          } cursor-pointer hover:text-[#1B1A1A] hover:scale-105 transition`}
        >
          All Categories
        </li>
        <li
          onClick={() => setCategory("trend")}
          className={`${
            category === "trend"
              ? "text-[#1B1A1A] border-b pb-[11px] border-b-[#1B1A1A]"
              : ""
          } cursor-pointer hover:text-[#1B1A1A] hover:scale-105 transition`}
        >
          On Trend
        </li>
        <li
          onClick={() => setCategory("makers")}
          className={`${
            category === "makers"
              ? "text-[#1B1A1A] border-b pb-[11px] border-b-[#1B1A1A]"
              : ""
          } cursor-pointer hover:text-[#1B1A1A] hover:scale-105 transition`}
        >
          Makers
        </li>
        <li
          onClick={() => setCategory("know")}
          className={`${
            category === "know"
              ? "text-[#1B1A1A] border-b pb-[11px] border-b-[#1B1A1A]"
              : ""
          } cursor-pointer hover:text-[#1B1A1A] hover:scale-105 transition`}
        >
          Know
        </li>
      </ul>
      <div className="border-b border-b-[#D3D3D3] pb-[11px] flex justify-between">
        <input
          type="text"
          className="text-[#1B1A1A] placeholder:text-[#C2C2C2] focus:outline-none"
          placeholder="Search..."
        />
        <svg
          className="cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="11.7666"
            cy="11.7666"
            r="8.98856"
            stroke="#6F737B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0183 18.4851L21.5423 22"
            stroke="#6F737B"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default FilterSearch
