"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../public/assets/images/LogoFandem.svg"
import Button from "./Button"
import SocialMedias from "./SocialMedias"
import ArrowTopRightButton from "./ArrowTopRightButton"
import logoDark from "../public/assets/images/LogoDark.png"
import { usePathname } from "next/navigation"
import { useGlobalContext } from "../context/GlobalContext"

const Navbar = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobalContext()
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  )

  useEffect(() => {
    const childElement = document.querySelector("#hamburgerMenu")

    if (childElement) {
      const parentElement = childElement.parentElement

      if (isMobileMenuOpen) {
        parentElement?.classList.add("hideScrollbar")
      } else {
        parentElement?.classList.remove("hideScrollbar")
      }
    }
  }, [isMobileMenuOpen, setIsMobileMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    const childElement = document.querySelector("#hamburgerMenu")

    if (childElement) {
      const parentElement = childElement.parentElement

      if (width >= 1024) {
        setIsMobileMenuOpen(false)
        parentElement?.classList.remove("hideScrollbar")
      }
    }

    return () => window.removeEventListener("resize", handleResize)
  }, [width, isMobileMenuOpen, setIsMobileMenuOpen])

  const purePathname = usePathname()
  const pathnameToDetermineCertainStylesForDarkAndWhiteModes = purePathname.split("/")[2]

  const removeAbsoluteClassUponClickingOnALink = () => {
    const childElement = document.querySelector("#hamburgerMenu")

    if (childElement) {
      const parentElement = childElement.parentElement

      parentElement?.classList.remove("hideScrollbar")

      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {!isMobileMenuOpen ? (
        <nav
          className={`${
            pathnameToDetermineCertainStylesForDarkAndWhiteModes
              ? "bg-[#fff]"
              : "bg-black"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center pt-8 px-4 lg:px-[135px]">
            <Link href={"/"} onClick={removeAbsoluteClassUponClickingOnALink}>
              <Image
                alt="Logo"
                sizes="100vw"
                height={0}
                width={0}
                src={
                  pathnameToDetermineCertainStylesForDarkAndWhiteModes ? logoDark : logo
                }
                priority
                className="lg:w-[183px] lg:h-[52px]"
              />
            </Link>
            <ul className="list-none lg:flex justify-center items-center gap-10 hidden">
              <Link href={"/#projects"} className={``}>
                <li
                  className={`hover:text-[#FFA800] transition ${
                    pathnameToDetermineCertainStylesForDarkAndWhiteModes
                      ? "text-[#1B1A1A] "
                      : "text-[#BDBDBD]"
                  } hover:border-b hover:pb-2 hover:border-b-[#FFA800] transition-all hover:duration-300`}
                >
                  Products
                </li>
              </Link>
              <Link href={"/blog"}>
                <li
                  className={`hover:text-[#FFA800] transition  ${
                    pathnameToDetermineCertainStylesForDarkAndWhiteModes
                      ? "text-[#1B1A1A] "
                      : "text-[#BDBDBD]"
                  } ${
                    purePathname === "/blog" && "text-[#FFA800]"
                  } hover:border-b hover:pb-2 hover:border-b-[#FFA800] transition-all hover:duration-300`}
                >
                  Blog
                </li>
              </Link>
              <Link href={"/#careers"} className={``}>
                <li
                  className={`hover:text-[#FFA800] transition ${
                    pathnameToDetermineCertainStylesForDarkAndWhiteModes
                      ? "text-[#1B1A1A] "
                      : "text-[#BDBDBD]"
                  } hover:border-b hover:pb-2 hover:border-b-[#FFA800] transition-all hover:duration-300`}
                >
                  Careers
                </li>
              </Link>
            </ul>

            <ArrowTopRightButton
              content="Contact Us"
              href={"/#contact"}
              className={`hidden lg:flex gap-[10px] ${
                pathnameToDetermineCertainStylesForDarkAndWhiteModes
                  ? "text-[#1B1A1A]"
                  : "text-[#FFF]"
              }`}
              svgColor={`${
                pathnameToDetermineCertainStylesForDarkAndWhiteModes ? "#1B1A1A" : "#FFF"
              }`}
            />
            <button
              onClick={() => {
                setIsMobileMenuOpen(true)
              }}
              className="block lg:hidden"
            >
              <svg
                width="32"
                height="15"
                viewBox="0 0 32 15"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="32"
                  height="3"
                  fill={
                    pathnameToDetermineCertainStylesForDarkAndWhiteModes
                      ? "#1B1A1A"
                      : "#FFF"
                  }
                />
                <rect
                  y="6"
                  width="32"
                  height="3"
                  fill={
                    pathnameToDetermineCertainStylesForDarkAndWhiteModes
                      ? "#1B1A1A"
                      : "#FFF"
                  }
                />
                <rect
                  y="12"
                  width="32"
                  height="3"
                  fill={
                    pathnameToDetermineCertainStylesForDarkAndWhiteModes
                      ? "#1B1A1A"
                      : "#FFF"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>
      ) : (
        <div
          id="hamburgerMenu"
          className=" min-h-screen flex flex-col  hideScrollbar pt-6 container mx-auto px-4 items-center justify-between relative"
        >
          <div className="flex items-center ">
            <span
              className="cursor-pointer absolute left-0 pl-4 group"
              onClick={() => {
                setIsMobileMenuOpen(false)
                const childElement = document.querySelector("#hamburgerMenu")

                if (childElement) {
                  const parentElement = childElement.parentElement

                  parentElement?.classList.remove("hideScrollbar")
                }
              }}
            >
              <svg
                className="hover:scale-125 transition duration-300 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_2264)">
                  <path
                    className="group-hover:fill-[#FFA800]"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_2264">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <Link href={"/"}>
              <Image
                alt="Logo"
                priority
                sizes="100vw"
                className="cursor-pointer"
                src={logo}
                onClick={removeAbsoluteClassUponClickingOnALink}
              />
            </Link>
          </div>
          <ul className="text-[30px] font-[500] mt-[91.59px] flex flex-col space-y-4 self-start">
            <Link
              href={"/#projects"}
              className="hover:text-[#FFA800] transition"
              onClick={removeAbsoluteClassUponClickingOnALink}
            >
              <li>Products</li>
            </Link>
            <Link
              href={"/blog"}
              className="hover:text-[#FFA800] transition"
              onClick={removeAbsoluteClassUponClickingOnALink}
            >
              <li>Blog</li>
            </Link>
            <Link
              href={"/#careers"}
              className="hover:text-[#FFA800] transition"
              onClick={removeAbsoluteClassUponClickingOnALink}
            >
              <li>Careers</li>
            </Link>
          </ul>
          <div className="border-t border-[#434343] mx-auto w-full mt-16">
            <SocialMedias
              width={48}
              height={48}
              gWidthHeight={38}
              className={"flex gap-6 mt-[33px] mx-3"}
            />
          </div>
          <div className="w-full" onClick={removeAbsoluteClassUponClickingOnALink}>
            <Button
              btn={{
                content: "Start Career",
                textColor: "text-[#1B1A1A]",
                bgColor: "bg-[#FFFFFF]",
                wFull: true,
                px6: "px-6",
                mx: "mx-4",
                mb: "mb-10",
                hoverBg: "hover:bg-[#FFA800]",
                hoverText: "hover:text-white",
                activeBg: "active:bg-[#D69516]",
                activeText: "active:[#fff]",
                hoverArrowColor: "hover:bg-[#FFFFFF]",
                arrowColor: "fill-[#1B1A1A]",
                arrowHover: "group-hover:fill-[#1B1A1A]",
                className: "transaction duration-300",
                href: "/blog",
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
