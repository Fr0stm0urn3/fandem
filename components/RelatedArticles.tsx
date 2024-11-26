"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Spinner from "./Spinner"
import { DescriptionContainer } from "../mediumElementStyles/mediumStyles"
import { usePathname } from "next/navigation"

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

type PostData = {
  feed: {
    image: string
  }
  items: Item[]
}

const RelatedArticles = () => {
  const [posts, setPosts] = useState<PostData>({ feed: { image: "" }, items: [] })
  const [loading, setLoading] = useState(true)
  const pathname = usePathname().split("/")[2].split(",").join("").split("%20").join(" ")

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
        setPosts(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [pathname])

  if (loading) {
    return <Spinner loading={loading} />
  }

  const categoryOfCurrentPost = posts.items.find((post) => {
    return post.title.split(":").join("") === pathname
  })

  const relatedArticles = posts.items
    .filter((item) => {
      return item.title.split(":").join("") !== pathname
    })
    .filter((post) => {
      return (
        post.categories.join("") === categoryOfCurrentPost!.categories.join("") ||
        post.categories.includes(categoryOfCurrentPost!.categories.join("")) ||
        (post.categories.length > 1 &&
          post.categories.includes(categoryOfCurrentPost!.categories[0])) ||
        post.categories.includes(categoryOfCurrentPost!.categories[1])
      )
    })

  return (
    <article className="container mx-auto mb-[100px] xl:mb-[150px] px-4 lg:px-[135px]">
      <h2 className="text-[#1B1A1A] text-[40px] mb-8 lg:text-[50px] font-[500] lg:mb-[60px] text-center 2xl:text-start px-4">
        Related Articles
      </h2>
      <div className="flex flex-wrap gap-[20px]  min-w-[343.195px] lg:min-w-[370px] justify-center ">
        {relatedArticles.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between border border-[#888] rounded-[10px] max-w-[372px] hover:brightness-105 hover:scale-105 transition-all duration-300 justify-self-center will-change-transform"
          >
            <Link href={`/blog/${item.title.match(/[^?.:%]+/g)}`}>
              <DescriptionContainer>
                <article
                  className="text-black flex flex-col justify-between items-center"
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
                  alt="Profile"
                  width={32}
                  height={32}
                  priority
                  className="rounded-full"
                  src={posts.feed.image}
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
    </article>
  )
}

export default RelatedArticles
