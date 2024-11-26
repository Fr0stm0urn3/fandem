"use client"

import Image from "next/image"
import heroBgImage from "../public/assets/images/HeroBackgroundImage.png"
import glassShaped from "../public/assets/images/GlassShaped.png"
import upsideGlassShaped from "../public/assets/images/UpsideDownGlassShaped.png"
import circleBlur from "../public/assets/images/Vector 4.png"
import circle from "../public/assets/images/Ellipse 85.png"
import pinkBlur from "../public/assets/images/pink bg.png"
import redPinkBlur from "../public/assets/images/red and pink blur.png"
import retroMeteor from "../public/assets/images/LooperGroup.png"
import blogArticlesImg from "../public/assets/images/LooperGroup (2).png"
import rotatedBg from "../public/assets/images/bg.png"
import darkBlur from "../public/assets/images/Ellipse 14_35.png"
import headerFooterImg from "../public/assets/images/Line.png"
import vector3 from "../public/assets/images/Vector 3.png"
import { useGlobalContext } from "../context/GlobalContext"

const HomePageBackgroundImages = () => {
  const { isMobileMenuOpen } = useGlobalContext()

  return (
    !isMobileMenuOpen && (
      <div>
        <Image
          alt="Retro"
          sizes="100vw"
          height={0}
          width={0}
          src={heroBgImage}
          priority
          className="absolute w-[469px] right-0 top-[470px] md:top-[370px] lg:w-[890px] lg:-top-[110px] z-0"
        />
        <Image
          alt="Blurry Glass Shaped"
          sizes="100vw"
          height={0}
          width={0}
          src={circleBlur}
          priority
          className="absolute top-[700px] lg:top-[630px] lg:right-20 z-0"
        />
        <Image
          alt="Blurry Glass Shaped"
          sizes="100vw"
          height={0}
          width={0}
          src={glassShaped}
          priority
          className="hidden absolute lg:block top-[500px] left-52 z-0"
        />
        <Image
          alt="Blurry Glass Shaped Upside"
          sizes="100vw"
          height={0}
          width={0}
          src={upsideGlassShaped}
          priority
          className="hidden lg:block absolute lg:top-[650px] lg:left-0 z-0 "
        />
        <Image
          alt="Pink Blur"
          sizes="100vw"
          height={0}
          width={0}
          src={pinkBlur}
          priority
          className=" absolute -left-96 top-[1000px] w-[400px] lg:left-0 lg:top-[1370px] blur-2xl z-0"
        />

        <Image
          alt="Red-Pink Blur"
          sizes="100vw"
          height={0}
          width={0}
          src={redPinkBlur}
          priority
          className="hidden lg:block absolute w-[700px] lg:left-0 lg:top-[1250px] -z-10"
        />

        {/* 
        <Image
          alt="Retro Meteor"
          sizes="100vw"
          height={0}
          width={0}
          src={retroMeteor}
          priority
          className="absolute -right-12 top-[1300px] brightness-125 lg:top-[1050px] -z-10"
        />

        <Image
          alt="Retro"
          sizes="100vw"
          height={0}
          width={0}
          src={rotatedBg}
          priority
          className="absolute max-w-[650px] left-0  bottom-[1125px] sm:bottom-[1090px] md:bottom-[1000px] lg:bottom-[630px] lg:max-w-[894.13px] lg:left-0 z-0"
        />
        <Image
          alt="Retro"
          sizes="100vw"
          height={0}
          width={0}
          src={darkBlur}
          priority
          className="absolute hidden lg:block right-0 bottom-[650px] z-0"
        />
        <Image
          alt="Retro"
          sizes="100vw"
          height={0}
          width={0}
          src={headerFooterImg}
          priority
          className="absolute top-[4340px] -left-[10%] min-w-[150%] md:min-w-[50%] md:top-[4450px] md:left-[10%] lg:left-[18%] lg:top-auto lg:bottom-[170px] xl:left-[28%] xl:top-auto xl:bottom-[25px] 2xl:left-[30%] z-0"
        />

        <Image
          alt="Retro Meteor"
          sizes="100vw"
          height={0}
          width={0}
          src={blogArticlesImg}
          priority
          className="absolute right-0 top-[1680px] min-w-[1600px] lg:min-w-[850px] brightness-200 lg:top-[1820px] z-0"
        />
        <Image
          alt="Retro"
          sizes="100vw"
          height={0}
          width={0}
          src={vector3}
          priority
          className="hidden xl:absolute xl:block right-[10%] bottom-[430px] xl:right-[20%] xl:-bottom-[90px] z-0 brightness-75"
        /> */}

        <Image
          alt="Retro Meteor"
          sizes="100vw"
          height={0}
          width={0}
          src={retroMeteor}
          priority
          className="absolute right-0 top-[1300px] brightness-125 lg:top-[1050px] -z-10"
        />
        <Image
          alt="Retro"
          sizes="100vw"
          height={0}
          width={0}
          src={rotatedBg}
          priority
          className="absolute min-w-[600px]  bottom-[1150px] sm:bottom-[1050px] md:bottom-[1000px] sm:max-w-[623px]  left-0   lg:bottom-[630px] lg:max-w-[894.13px] lg:left-0 z-0"
        />
        {/* <Image
          alt="Retro"
          sizes="100vw"
          height={0}
          width={0}
          src={darkBlur}
          priority
          className="absolute hidden lg:block right-0 bottom-[650px] z-0"
        /> */}
        <Image
          alt="Retro"
          sizes="100vw"
          height={0}
          width={0}
          src={headerFooterImg}
          priority
          className="absolute top-[4340px] -left-[10%] min-w-[150%] md:min-w-[50%] md:top-[4450px] md:left-[10%] lg:left-[18%] lg:top-auto lg:bottom-[170px] xl:left-[28%] xl:top-auto xl:bottom-[25px] 2xl:left-[30%] z-0"
        />

        <Image
          alt="Retro Meteor"
          sizes="100vw"
          height={0}
          width={0}
          src={blogArticlesImg}
          priority
          className="absolute right-0 top-[1680px] min-w-[1600px] lg:min-w-[850px] brightness-200 lg:top-[1820px] z-0"
        />
        <Image
          alt="Retro"
          sizes="100vw"
          height={0}
          width={0}
          src={vector3}
          priority
          className="hidden xl:absolute xl:block right-[10%] bottom-[430px] xl:right-[20%] xl:-bottom-[90px] z-0 brightness-75"
        />
      </div>
    )
  )
}

export default HomePageBackgroundImages
