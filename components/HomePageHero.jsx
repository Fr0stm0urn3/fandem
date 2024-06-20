"use client"

import { useState, useEffect } from "react"
import TextTransition, { presets } from "react-text-transition"

const TEXTS = [
  "team",
  "brand",
  "league",
  "game",
  "athlete",
  "music",
  "IP",
  "film",
  "series",
  "self",
]

const HomePageHero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interValId = setInterval(() => setIndex((index) => index + 1), 200000)

    return () => clearTimeout(interValId)
  }, [])

  return (
    <header className="mt-[53px] mb-[243px] md:mt-[171px] md:mb-[353px] flex flex-col  items-center justify-center md:justify-start md:items-start  container mx-auto">
      <h1 className="text-5xl md:text-6xl font-semibold leading-[57.6px] md:leading-[72px] shadow-md w-[340px] md:w-[570px]  z-10">
        Purpose-built NFT solutions for your{" "}
        <TextTransition springConfig={presets.wobbly} className="text-[#FFA800]">
          {`{${TEXTS[index % TEXTS.length]}}`}
        </TextTransition>
      </h1>
      <p className="w-[300px] -ml-8 md:ml-0 md:w-[470px] mt-5 mb-10 font-[gilroy] text-base leading-[27.2px] text-[#BEBEBE] z-10">
        We partner with the most forward-thinking global IP rights owners across sports,
        gaming, and entertainment to create their NFT marketplaces.{" "}
      </p>

      <button
        className="flex gap-3 justify-center items-center text-[18px] group font-bold rounded-[10px] py-3 px-6 text-[#1B1A1A] bg-[#FFFFFF] 
      hover:bg-[#FFA800] hover:text-white  active:bg-[#D69516] transition active:[#fff] w-[340px] md:w-fit z-10"
      >
        Start Career
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-[#1B1A1A] group-hover:fill-[#fff] group-hover:-translate-y-0.5 group-hover:scale-125 transition-transform duration-500`}
          >
            <path
              d="M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z"
              fill="fill-[#1B1A1A]"
            />
          </svg>
        </span>
      </button>
    </header>
  )
}

export default HomePageHero
