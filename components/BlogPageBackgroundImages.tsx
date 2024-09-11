"use client"

import blogHeroImg from "../public/assets/images/Group 87.png"
import Image from "next/image"
import { useGlobalContext } from "../context/GlobalContext"

const BlogPageBackgroundImages = () => {
  const { isMobileMenuOpen } = useGlobalContext()

  return (
    !isMobileMenuOpen && (
      <>
        <Image
          alt="Retro"
          sizes="100vw"
          height={0}
          width={0}
          src={blogHeroImg}
          priority
          className="absolute  right-0 top-72 md:top-36  lg:right-0 lg:top-0 -z-10"
        />
      </>
    )
  )
}

export default BlogPageBackgroundImages
