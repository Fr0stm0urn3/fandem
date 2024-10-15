"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Spinner from "./Spinner"

type Item = {
  title: string
  content: string
  person: {
    name: string
    createdAt: string
  }
  author: string
  pubDate: string
  categories: string[]
}

type PostsData = {
  feed: {
    image: string
  }
  items: Item[]
}

const NFTHero = () => {
  const [posts, setPosts] = useState<PostsData>({ feed: { image: "" }, items: [] })
  const [loading, setLoading] = useState(true)

  const pathname =
    usePathname()?.split("/")[2].split(",").join("").split("%20").join(" ") || ""

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@l.kakabadze2020"
        )

        if (res.status !== 200) {
          throw new Error("Failed to fetch the data...")
        }

        const data: PostsData = await res.json()

        setPosts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [pathname])

  if (loading) {
    return <Spinner loading={loading} />
  }

  const item = posts.items.find((item) => item.title.replace(/[:]/g, "") === pathname)

  if (!item) {
    return <div>Post not found</div>
  }

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="w-full">
        <h1 className="text-[#1B1A1A] text-[40px] md:text-[54px] font-[500] leading-[52px] lg:leading-[62px] ">
          {item.title}
        </h1>
        <div className="flex items-center gap-[40px] mt-4 mb-[4px] lg:mt-5 lg:mb-[20px] ">
          <div className="flex items-center gap-2">
            <Image
              alt="Person"
              priority
              sizes="100vw"
              className="rounded-[32px]"
              height={32}
              width={32}
              src={posts.feed.image}
            />
            <span className="text-[#1B1A1A]">{item.author}</span>
          </div>
          <div className="text-[#1B1A1A]">
            {new Date(item.pubDate.slice(0, 10)).toLocaleString("default", {
              month: "long",
            })}{" "}
            {new Date(item.pubDate.slice(0, 10)).getDate()},{" "}
            {new Date(item.pubDate.slice(0, 10)).getFullYear()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTHero
