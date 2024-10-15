"use client"

import React from "react"
import { useState, useRef } from "react"
import Image from "next/image"
import boxingImg from "../public/assets/images/BoxingImg.png"
import MiniTitle from "./MiniTitle"
import Link from "next/link"
import cardImg1 from "../public/assets/images/Card 1.png"
import cardImg2 from "../public/assets/images/Card 2.png"
import cardImg3 from "../public/assets/images/Card 3.png"
import cardImg4 from "../public/assets/images/Card 4.png"
import cardImg5 from "../public/assets/images/Card 5.png"
import cardImg6 from "../public/assets/images/Card 6.png"
import cardImg7 from "../public/assets/images/Card 7.png"
import cardImg8 from "../public/assets/images/Card 8.png"
import cardImg9 from "../public/assets/images/Card 9.png"
import Slider from "react-slick"

const projects = [
  // { title: "blog", src: boxingImg },
  { title: "Explained, Those are NFTs and how you can invest safely", src: cardImg1 },
  { title: "Explained, Understanding NFTs, A Safe Investment Guide", src: cardImg2 },
  { title: "Explained, NFT Basics, Investing Wisely and Safely", src: cardImg3 },
  { title: "Explained, Your Guide to Safe Investing", src: cardImg4 },
  { title: "Explained, What Are NFTs, Learn to Invest Securely", src: cardImg5 },
  { title: "Explained, How to Start Safely", src: cardImg6 },
  { title: "Explained, Safe Investment Strategies", src: cardImg7 },
  { title: "Explained, A Beginners Safe Guide", src: cardImg8 },
  { title: "Explained, How to Invest Safely", src: cardImg9 },
]

const OurProjects = () => {
  const [currItemIndex, setCurrItemIndex] = useState(0)
  const slider = React.useRef<any>(null)

  const totalItemsLength = projects.length

  // var settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay: false,
  //   autoplaySpeed: 8000,
  //   // nextArrow: <NextArrow />,
  //   // prevArrow: <PrevArrow />,
  //   // beforeChange: (current, next) => setImageIndex(next),
  // }

  const settings = {
    arrows: false,
    draggable: false,
    swipe: false,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  console.log(currItemIndex)

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center mb-[168px] lg:mb-[243px]container mx-auto px-4 z-50 lg:px-[135px]"
    >
      <MiniTitle title={"Building The Future"} />
      <h2 className="text-[40px] lg:text-[50px] font-[500] leading-[65px] mb-10 lg:mb-20 z-10">
        Our Projects
      </h2>
      <div className="w-full h-fit p-8 ">
        <Slider {...settings} className="w-full" ref={slider}>
          {projects.length > 0 &&
            projects.map((project) => (
              <div
                className="slider-box flex flex-col justify-center items-center gap-[48px] lg:flex-row  lg:justify-between mx-auto container 2xl:px-[135px] w-full height-full"
                key={project.title ? project.title : "1040fl-124gd5"}
              >
                <div className="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:gap-6 z-10">
                  <Link
                    href={
                      project.title === "blog" ? project.title : `/blog/${project.title}`
                    }
                    className="translate-all duration-300 hover:scale-[102%]"
                  >
                    <Image
                      alt={project.title ? project.title : "Boxing"}
                      sizes="100vw"
                      width={570}
                      src={project.src}
                      priority
                      className={`rounded-2xl mb-[6.3px] z-10`}
                    />
                  </Link>
                  <span className="lg:self-end flex z-10">
                    <button
                      className={`${
                        currItemIndex === 0 ? "cursor-not-allowed" : "cursor-pointer"
                      } group`}
                      onClick={() => setCurrItemIndex((prev) => prev - 1)}
                      disabled={currItemIndex === 0}
                    >
                      <svg
                        width="21"
                        height="16"
                        viewBox="0 0 21 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() =>
                          currItemIndex !== 0 && slider?.current?.slickPrev()
                        }
                      >
                        <path
                          d="M0.292893 7.29289C-0.0976314 7.68341 -0.0976315 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65686 0.92893L0.292893 7.29289ZM21 7L1 7L1 9L21 9L21 7Z"
                          fill={currItemIndex === 0 ? "#606060" : "white"}
                          className={`${
                            currItemIndex === 0
                              ? "group-hover:fill-pink-600"
                              : "group-hover:fill-[#FFA800]"
                          } group-active:[#D69516]`}
                        />
                      </svg>
                    </button>
                    <svg
                      width="15"
                      height="29"
                      viewBox="0 0 15 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4 0.439998H14.64L3.24 29H2.98023e-08L11.4 0.439998Z"
                        fill="white"
                      />
                    </svg>
                    <button
                      className={`${
                        currItemIndex === totalItemsLength - 1
                          ? "cursor-not-allowed"
                          : "cursor-pointer"
                      } group`}
                      onClick={() => {
                        if (currItemIndex !== totalItemsLength - 1) {
                          setCurrItemIndex((prev) => prev + 1)
                        }
                      }}
                      disabled={currItemIndex >= totalItemsLength - 1}
                    >
                      <svg
                        width="21"
                        height="16"
                        viewBox="0 0 21 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() =>
                          currItemIndex !== totalItemsLength - 1 &&
                          slider?.current?.slickNext()
                        }
                      >
                        <path
                          d="M20.7071 8.70711C21.0976 8.31659 21.0976 7.68342 20.7071 7.2929L14.3431 0.928934C13.9526 0.53841 13.3195 0.53841 12.9289 0.928934C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-1.35505e-07 9L20 9L20 7L1.35505e-07 7L-1.35505e-07 9Z"
                          fill={
                            currItemIndex === totalItemsLength - 1 ? "#606060" : "white"
                          }
                          className={`${
                            currItemIndex === totalItemsLength - 1
                              ? "group-hover:fill-pink-600"
                              : "group-hover:fill-[#FFA800]"
                          } group-active:[#D69516]`}
                        />
                      </svg>
                    </button>
                  </span>
                </div>

                <div className="self-start ml-2 md:ml-24 lg:ml-0 lg:self-center z-10">
                  <h4 className="text-[30px] font-[500]">GLORY Smacks</h4>
                  <p className=" leading-[27.2px] text-[#BEBEBE] w-[350px] lg:w-[373.9px] mt-3 lg:mt-4 mb-8 lg:mb-10 z-0">
                    The first full NFT marketplace for a combat sports league, utilizing
                    the content library from GLORY Kickboxing and K-1.
                  </p>
                  <button
                    className="flex gap-3 justify-center items-center text-[18px] group font-bold rounded-[10px] py-3 px-6 text-[#1B1A1A] bg-[#FFFFFF]
                  hover:bg-[#FFA800] hover:text-white active:bg-[#D69516] active:[#fff] transition"
                  >
                    Learn More
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
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  )
}

export default OurProjects
