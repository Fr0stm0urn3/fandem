import Image from "next/image"
import heroBgImage from "../public/assets/images/HeroBackgroundImage.png"
import glassShaped from "../public/assets/images/GlassShaped.png"
import upsideGlassShaped from "../public/assets/images/UpsideDownGlassShaped.png"
import circleBlur from "../public/assets/images/Vector 4.png"
import circle from "../public/assets/images/Ellipse 85.png"
import pinkBlur from "../public/assets/images/pink bg.png"
import redPinkBlur from "../public/assets/images/red and pink blur.png"
import retroMeteor from "../public/assets/images/LooperGroup.png"

const BackgroundImages = () => {
  return (
    <>
      <Image
        alt="Blurry Glass Shaped"
        sizes="100vw"
        height={0}
        width={0}
        src={circleBlur}
        // className="absolute  right-20 top-[555px] lg:w-[694.13px] lg:right-0 lg:top-56 z-0"
        className="absolute top-[700px] lg:top-[850px] lg:right-20 z-0"
      />
      <Image
        alt="Blurry Glass Shaped"
        sizes="100vw"
        height={0}
        width={0}
        src={glassShaped}
        // className="absolute  right-20 top-[555px] lg:w-[694.13px] lg:right-0 lg:top-56 z-0"
        className="hidden absolute lg:block top-[770px] left-40 z-0"
      />
      <Image
        alt="Blurry Glass Shaped Upside"
        sizes="100vw"
        height={0}
        width={0}
        src={upsideGlassShaped}
        // className="absolute  right-20 top-[555px] lg:w-[694.13px] lg:right-0 lg:top-56 z-0"
        className="hidden lg:block absolute lg:top-[880px] lg:left-0 z-0 "
      />
      <Image
        alt="Retro"
        sizes="100vw"
        height={0}
        width={0}
        src={heroBgImage}
        className="absolute w-[469px] right-0 top-[550px] lg:w-[694.13px] lg:right-0 lg:top-56 z-0"
      />
      <Image
        alt="Circle"
        sizes="100vw"
        height={0}
        width={0}
        src={circle}
        className="absolute lg:left-0 lg:top-[900px] z-0"
      />
      <Image
        alt="Pink Blur"
        sizes="100vw"
        height={0}
        width={0}
        src={pinkBlur}
        className=" absolute -left-96 top-[1000px] w-[700px] lg:left-0 lg:top-[1200px] blur-2xl z-[2]"
      />
      <Image
        alt="Red-Pink Blur"
        sizes="100vw"
        height={0}
        width={0}
        src={redPinkBlur}
        className="hidden lg:block absolute w-[700px] lg:left-0 lg:top-[1250px] z-0"
      />
      <Image
        alt="Retro Meteor"
        sizes="100vw"
        height={0}
        width={0}
        src={retroMeteor}
        className="absolute -right-12 top-[1300px] brightness-125 lg:top-[1050px] z-0"
      />
    </>
  )
}

export default BackgroundImages
