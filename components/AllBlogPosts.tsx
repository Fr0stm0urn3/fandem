"use client"

import { useState, useEffect } from "react"

import Image from "next/image"
import Link from "next/link"
import Spinner from "./Spinner"
import React from "react"
import { DescriptionContainer } from "../mediumElementStyles/mediumStyles"

type Feed = {
  image: string
}

type Item = {
  title: string
  content: string
  person: {
    name: string
    createdAt: string
  }
  author: string
  pubDate: string
  categories: [string]
}

const AllBlogPosts = () => {
  const [items, setItems] = useState<{ items: Item[] }>({ items: [] })
  const [feed, setFeed] = useState<Feed | null>(null)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(9)
  const [activateSearch, setActivateSearch] = useState(false)

  const [searchQuery, setSearchQuery] = useState("")
  const [postCategory, setPostCategory] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@l.kakabadze2020"
        )

        if (res.status !== 200) {
          throw new Error("Failed to fetch the data...")
        }

        const data = await res.json()

        setItems(data)
        setFeed(data.feed)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const totalPages = Math.ceil(items.items.length / pageSize)
  const endIndex = page * pageSize
  const startIndex = endIndex - pageSize

  const filterBasedOnCategoryAndSearchTitle = items.items
    .filter((item) => {
      return postCategory ? item.categories.includes(postCategory) : item
    })
    .filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase())
    })

  if (loading) {
    return <Spinner loading={loading} />
  }

  return (
    <section className="container mx-auto flex flex-col items-center">
      <div>
        <div className="hidden text-black lg:flex justify-between p-4 lg:py-0 mb-[32px] lg:mb-[76px]">
          <ul className="flex text-[#898888] list-none gap-[46px] px-4">
            <li
              onClick={() => setPostCategory("")}
              className={`${
                postCategory === ""
                  ? "text-[#1B1A1A] border-b pb-[11px] border-b-[#1B1A1A] "
                  : "hover:border-b hover:pb-[11px] hover:border-b-[#1B1A1A]"
              } cursor-pointer hover:text-[#1B1A1A] hover:scale-105 transition-all`}
            >
              All Categories
            </li>
            <li
              onClick={() => setPostCategory("trends")}
              className={`${
                postCategory === "trends"
                  ? "text-[#1B1A1A] border-b pb-[11px] border-b-[#1B1A1A]"
                  : "hover:border-b hover:pb-[11px] hover:border-b-[#1B1A1A]"
              } cursor-pointer hover:text-[#1B1A1A] hover:scale-105 transition-all`}
            >
              On Trend
            </li>
            <li
              onClick={() => setPostCategory("makers")}
              className={`${
                postCategory === "makers"
                  ? "text-[#1B1A1A] border-b pb-[11px] border-b-[#1B1A1A]"
                  : "hover:border-b hover:pb-[11px] hover:border-b-[#1B1A1A]"
              } cursor-pointer hover:text-[#1B1A1A] hover:scale-105 transition-all`}
            >
              Makers
            </li>
            <li
              onClick={() => setPostCategory("know")}
              className={`${
                postCategory === "know"
                  ? "text-[#1B1A1A] border-b pb-[11px] border-b-[#1B1A1A]"
                  : "hover:border-b hover:pb-[11px] hover:border-b-[#1B1A1A]"
              } cursor-pointer hover:text-[#1B1A1A] hover:scale-105 transition-all`}
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
        <div
          className={`flex lg:hidden justify-between items-center mb-8 ${
            activateSearch ? "flex-col" : "flex-row"
          }`}
        >
          <div
            className={`flex justify-between items-center cursor-pointer border rounded-xl p-4 gap-[67px] ${
              activateSearch ? "w-[350px]" : "w-[267px]"
            }`}
          >
            <select
              className={`text-[20px] text-[#1B1A1A] outline-none py-1  cursor-pointer  ${
                activateSearch ? "pr-40" : "pr-20"
              }`}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setPostCategory(e.target.value)
              }}
            >
              <option
                className="cursor-pointer text-[#1B1A1A] text-[20px]"
                onClick={() => setPostCategory("")}
                value={""}
              >
                All Categories
              </option>
              <option
                className="cursor-pointer text-[#1B1A1A] text-[20px]"
                onClick={() => setPostCategory("trends")}
                value={"trends"}
              >
                On Trend
              </option>
              <option
                className="cursor-pointer text-[#1B1A1A] text-[20px]"
                onClick={() => setPostCategory("makers")}
                value={"makers"}
              >
                Makers
              </option>
              <option
                className="cursor-pointer text-[#1B1A1A] text-[20px]"
                onClick={() => setPostCategory("know")}
                value={"know"}
              >
                Know
              </option>
            </select>
          </div>
          {!activateSearch ? (
            <div
              className={`border rounded-xl p-[18px] cursor-pointer ${
                activateSearch && "w-[400px]"
              }`}
              onClick={() => setActivateSearch(true)}
            >
              <svg
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
          ) : (
            <div className="border-b border-b-[#D3D3D3] pb-[11px] flex justify-between my-6 mt-7 text-[20px]">
              <input
                type="text"
                className="text-[#1B1A1A] placeholder:text-[#C2C2C2] focus:outline-none w-[330px]"
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
          )}
        </div>
        {/* All Cards */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[30px] justify-center min-w-[343.195px] lg:min-w-[370px]">
          {items.items.length > 0 &&
            filterBasedOnCategoryAndSearchTitle
              .slice(startIndex, endIndex)
              .map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between border border-[#888] rounded-[10px] max-w-[450px] lg:max-w-[372px] hover:brightness-110 transition-all duration-300 hover:scale-105"
                >
                  <Link href={`/blog/${item.title.match(/[^?.:%]+/g)}`}>
                    <DescriptionContainer>
                      <article
                        className="text-black flex flex-col justify-between lg:items-center"
                        dangerouslySetInnerHTML={{
                          __html: item.content.slice(0, 300).trim() + "...",
                        }}
                      ></article>
                    </DescriptionContainer>
                  </Link>
                  <div className="border border-[#DDD] mt-[40px] mb-[13px] mx-[34px]" />
                  <div className="flex justify-between items-center p-[34px] ">
                    <div className="flex gap-2 items-center">
                      <Image
                        alt="Profile Picture"
                        width={32}
                        height={32}
                        priority
                        className="rounded-full"
                        src={feed!.image}
                      />
                      <span className="text-[#1B1A1A]">{item.author}</span>
                    </div>
                    <span className="text-[#565656]">
                      {/* {new Date()} {item.pubDate.slice(0, 4)} */}
                      {new Date(item.pubDate.slice(0, 10)).toLocaleString("default", {
                        month: "long",
                      })}{" "}
                      {new Date(item.pubDate.slice(0, 10)).getDay()},{" "}
                      {new Date(item.pubDate.slice(0, 10)).getFullYear()}
                    </span>
                  </div>
                </div>
              ))}
        </div>
        <div className="flex justify-center items-center gap-[18px] text-[#1B1A1A] mt-[80px] mb-[151px]">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className={`${page === 1 ? "text-gray-400 cursor-not-allowed" : ""}`}
          >
            Prev
          </button>
          <span
            onClick={() => setPage(1)}
            className={`${
              page === 1 ? "border-b border-b-[#1B1A1A]" : ""
            } hover-all:scale-110 transition cursor-pointer`}
          >
            1
          </span>
          <span
            onClick={() => setPage(2)}
            className={`${
              page === 2 ? "border-b border-b-[#1B1A1A]" : ""
            } hover-all:scale-110 transition cursor-pointer`}
          >
            2
          </span>
          <span
            onClick={() => setPage(3)}
            className={`${
              page === 3 ? "border-b border-b-[#1B1A1A]" : ""
            } hover-all:scale-110 transition cursor-pointer`}
          >
            3
          </span>
          <button
            disabled={page === totalPages}
            className={`${page === totalPages ? "text-gray-400 cursor-not-allowed" : ""}`}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default AllBlogPosts
