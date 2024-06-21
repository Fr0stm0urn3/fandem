"use client"

import { useState, useEffect } from "react"

import Image from "next/image"
import person from "../public/assets/images/Person.png"
import cardOne from "../public/assets/images/Card 1.png"
import cardTwo from "../public/assets/images/Card 2.png"
import cardThree from "../public/assets/images/Card 3.png"
import cardFour from "../public/assets/images/Card 4.png"
import cardFive from "../public/assets/images/Card 5.png"
import cardSix from "../public/assets/images/Card 6.png"
import cardSeven from "../public/assets/images/Card 7.png"
import cardEight from "../public/assets/images/Card 8.png"
import cardNine from "../public/assets/images/Card 9.png"

const data = [
  {
    id: "1",
    img: cardOne,
    title: "Explained: Those are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "2",
    img: cardTwo,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "3",
    img: cardThree,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "4",
    img: cardFour,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "5",
    img: cardFive,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "6",
    img: cardSix,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "7",
    img: cardSeven,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "8",
    img: cardEight,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: 9,
    img: cardNine,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },
  {
    id: "1",
    img: cardOne,
    title: "Explained: Those are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "2",
    img: cardTwo,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "3",
    img: cardThree,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "4",
    img: cardFour,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "5",
    img: cardFive,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "6",
    img: cardSix,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "7",
    img: cardSeven,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "8",
    img: cardEight,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: 9,
    img: cardNine,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2022",
    },
  },
  {
    id: "1",
    img: cardOne,
    title: "Explained: Those are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "2",
    img: cardTwo,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "3",
    img: cardThree,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "4",
    img: cardFour,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "5",
    img: cardFive,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "6",
    img: cardSix,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "7",
    img: cardSeven,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: "8",
    img: cardEight,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2021",
    },
  },

  {
    id: 9,
    img: cardNine,
    title: "Explained: What are NFTs and how you can invest safely",
    subtitle:
      "To avoid such fast-rising and free-falling valuations, you need to properly assess NFTs...",
    person: {
      img: person,
      name: "John Smith",
      createdAt: "April 22, 2023",
    },
  },
]

const AllBlogPosts = () => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(9)
  const totalPages = Math.ceil(items.length / pageSize)
  const endIndex = page * pageSize
  const startIndex = endIndex - pageSize

  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("all")

  useEffect(() => {
    data.length > 0 && setItems(data)
  }, [])

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="container mx-auto">
      <div className="text-black flex justify-between py-4 lg:py-0 mb-[32px] lg:mb-[76px]">
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
      {/* All Cards */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[30px] place-content-between">
        {filteredItems.length > 0 &&
          filteredItems.slice(startIndex, endIndex).map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center border border-[#888] rounded-[10px] w-[370px]"
            >
              <Image
                alt="Art"
                sizes="100vh"
                width={0}
                height={0}
                src={item.img}
                className="rounded-t-[10px]"
              />
              <div className="p-[34px]">
                <h5 className="text-[#1B1A1A] text-[26px] lg:text-[30px] w-[295px] lg:w-[302px]">
                  {item.title}
                </h5>
                <p className="leading-[27.2px] text-[#555] font-[gilroy] w-[295px] lg:w-[302px] mt-5">
                  {item.subtitle}
                </p>
                <div className="border border-[#DDD] mt-[40px] mb-[13px]" />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Image
                      alt="Person"
                      width={32}
                      height={32}
                      priority
                      src={item.person.img}
                    />
                    <span className="text-[#1B1A1A]">{item.person.name}</span>
                  </div>
                  <span className="text-[#565656]">{item.person.createdAt}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center gap-[18px] text-[#1B1A1A] mt-[80px] mb-[151px]">
        {page > 1 && <span onClick={() => setPage((prev) => prev - 1)}>Prev</span>}
        <span
          onClick={() => setPage(1)}
          className={`${
            page === 1 ? "border-b border-b-[#1B1A1A]" : ""
          } hover:scale-110 transition`}
        >
          1
        </span>
        <span
          onClick={() => setPage(2)}
          className={`${
            page === 2 ? "border-b border-b-[#1B1A1A]" : ""
          } hover:scale-110 transition`}
        >
          2
        </span>
        <span
          onClick={() => setPage(3)}
          className={`${
            page === 3 ? "border-b border-b-[#1B1A1A]" : ""
          } hover:scale-110 transition`}
        >
          3
        </span>
        {page < totalPages && (
          <span onClick={() => setPage((prev) => prev + 1)}>Next</span>
        )}
      </div>
    </section>
  )
}

export default AllBlogPosts
