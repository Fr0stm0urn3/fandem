import Image from "next/image"
import person from "../public/assets/images/Person.png"
import heroImg from "../public/assets/images/image 1297.png"
import heroImgSm from "../public/assets/images/image 1297 (1).png"

const NFTHero = () => {
  return (
    <header className="container mx-auto px-4 lg:px-[100px] flex flex-col items-center">
      <div>
        <h1 className="text-[#1B1A1A] text-[40px] lg:text-[54px] font-[500] leading-[62px]  w-[423px] md:w-[650px] lg:w-[927px]">
          Explained: What are NFTs and how you can invest safely
        </h1>
        <div className="flex items-center gap-[40px] mt-4 mb-[24px] lg:mt-5 lg:mb-[40px] self-start">
          <div className="flex items-center gap-2">
            <Image
              alt="Person"
              priority
              sizes="100vw"
              height={32}
              width={32}
              src={person}
            />
            <span className="text-[#1B1A1A]">John Smith</span>
          </div>
          <div className="text-[#1B1A1A]">July 26, 2021</div>
        </div>
        <Image
          priority
          sizes="100vw"
          alt="Hero"
          height={0}
          width={0}
          src={heroImg}
          className="hidden md:block"
        />
        <Image
          priority
          sizes="100vw"
          alt="Hero"
          height={0}
          width={0}
          src={heroImgSm}
          className="md:hidden w-[440px]"
        />
      </div>
    </header>
  )
}

export default NFTHero
