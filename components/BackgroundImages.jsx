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

const BackgroundImages = () => {
  return (
    <>
      <Image
        alt="Blurry Glass Shaped"
        sizes="100vw"
        height={0}
        width={0}
        src={circleBlur}
        priority
        className="absolute top-[700px] lg:top-[850px] lg:right-20 z-0"
      />
      <Image
        alt="Blurry Glass Shaped"
        sizes="100vw"
        height={0}
        width={0}
        src={glassShaped}
        priority
        className="hidden absolute lg:block top-[770px] left-40 z-0"
      />
      <Image
        alt="Blurry Glass Shaped Upside"
        sizes="100vw"
        height={0}
        width={0}
        src={upsideGlassShaped}
        priority
        className="hidden lg:block absolute lg:top-[880px] lg:left-0 z-0 "
      />
      <Image
        alt="Retro"
        sizes="100vw"
        height={0}
        width={0}
        src={heroBgImage}
        priority
        className="absolute w-[469px] right-0 top-[550px] lg:w-[694.13px] lg:right-0 lg:top-56 z-0"
      />
      <Image
        alt="Circle"
        sizes="100vw"
        height={0}
        width={0}
        src={circle}
        priority
        className="absolute lg:left-0 lg:top-[900px] z-0"
      />
      <Image
        alt="Pink Blur"
        sizes="100vw"
        height={0}
        width={0}
        src={pinkBlur}
        priority
        className=" absolute -left-96 top-[1000px] w-[700px] lg:left-0 lg:top-[1200px] blur-2xl z-[2]"
      />
      <Image
        alt="Red-Pink Blur"
        sizes="100vw"
        height={0}
        width={0}
        src={redPinkBlur}
        priority
        className="hidden lg:block absolute w-[700px] lg:left-0 lg:top-[1250px] z-0"
      />
      <Image
        alt="Retro Meteor"
        sizes="100vw"
        height={0}
        width={0}
        src={retroMeteor}
        priority
        className="absolute -right-12 top-[1300px] brightness-125 lg:top-[1050px] z-0"
      />

      <Image
        alt="Retro Meteor"
        sizes="100vw"
        height={0}
        width={0}
        src={blogArticlesImg}
        priority
        className="absolute right-0 top-[1750px] min-w-[1600px] lg:min-w-[850px] brightness-200 lg:top-[1770px] z-0"
      />
      <Image
        alt="Retro"
        sizes="100vw"
        height={0}
        width={0}
        src={rotatedBg}
        priority
        className="absolute max-w-[650px] left-0 bottom-[1620px] lg:bottom-[910px] lg:max-w-[894.13px] lg:left-0 z-0"
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
        className="absolute top-[4450px] -left-[10%] min-w-[150%] md:min-w-[50%] md:top-[4650px] md:left-[10%] lg:left-[18%] lg:top-[3700px] xl:left-[28%] xl:top-[3360px] 2xl:left-[37%] z-0"
      />
      <Image
        alt="Retro"
        sizes="100vw"
        height={0}
        width={0}
        src={vector3}
        priority
        className="absolute right-[10%] bottom-[430px] lg:right-[20%] lg:bottom-[270px] z-0"
      />
    </>
  )
}

export default BackgroundImages
