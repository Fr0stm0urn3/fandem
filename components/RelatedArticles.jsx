import Image from "next/image"
import cardImgOne from "../public/assets/images/Card 7.png"
import cardImgTwo from "../public/assets/images/Card 8.png"
import cardImgThree from "../public/assets/images/Card 9.png"
import person from "../public/assets/images/Person.png"
import Link from "next/link"

const RelatedArticles = () => {
  return (
    <article className="container mx-auto px-4 3xl:px-0 mb-[100px] xl:mb-[150px]">
      <h2 className="text-[#1B1A1A] text-[40px] mb-8 lg:text-[50px] font-[500] lg:mb-[60px]">
        Related Articles
      </h2>
      <div className="flex  flex-wrap justify-center items-center gap-[39px] md:gap-[30px] xl:justify-between">
        <div className="flex flex-col justify-center items-center border border-[#888] rounded-[10px] w-[370px]">
          <Link href={"/blog/1"}>
            <Image
              alt="Art"
              sizes="100vh"
              width={0}
              height={0}
              src={cardImgOne}
              className="rounded-t-[10px]"
            />
          </Link>
          <div className="p-[34px]">
            <h5 className="text-[#1B1A1A] text-[26px] lg:text-[30px] w-[295px] lg:w-[302px]">
              Explained: What are NFTs and how you can invest safely
            </h5>
            <p className="leading-[27.2px] text-[#555] font-[gilroy] w-[255px] lg:w-[295px] mt-5">
              To avoid such fast-rising and free-falling valuations, you need to properly
              assess NFTs...
            </p>
            <div className="border border-[#DDD] mt-[40px] mb-[13px]" />
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Image alt="Person" width={32} height={32} priority src={person} />
                <span className="text-[#1B1A1A]">John Smith</span>
              </div>
              <span className="text-[#565656]">April 22, 2021</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border border-[#888] rounded-[10px] w-[370px]">
          <Link href={"/blog/1"}>
            <Image
              alt="Art"
              sizes="100vh"
              width={0}
              height={0}
              src={cardImgTwo}
              className="rounded-t-[10px]"
            />
          </Link>
          <div className="p-[34px]">
            <h5 className="text-[#1B1A1A] text-[26px] lg:text-[30px] w-[295px] lg:w-[302px]">
              Explained: What are NFTs and how you can invest safely
            </h5>
            <p className="leading-[27.2px] text-[#555] font-[gilroy] w-[255px] lg:w-[295px] mt-5">
              To avoid such fast-rising and free-falling valuations, you need to properly
              assess NFTs...
            </p>
            <div className="border border-[#DDD] mt-[40px] mb-[13px]" />
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Image alt="Person" width={32} height={32} priority src={person} />
                <span className="text-[#1B1A1A]">John Smith</span>
              </div>
              <span className="text-[#565656]">April 22, 2021</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border border-[#888] rounded-[10px] w-[370px]">
          <Link href={"/blog/1"}>
            <Image
              alt="Art"
              sizes="100vh"
              width={0}
              height={0}
              src={cardImgThree}
              className="rounded-t-[10px]"
            />
          </Link>
          <div className="p-[34px]">
            <h5 className="text-[#1B1A1A] text-[26px] lg:text-[30px] w-[295px] lg:w-[302px]">
              Explained: What are NFTs and how you can invest safely
            </h5>
            <p className="leading-[27.2px] text-[#555] font-[gilroy] w-[255px] lg:w-[295px] mt-5">
              To avoid such fast-rising and free-falling valuations, you need to properly
              assess NFTs...
            </p>
            <div className="border border-[#DDD] mt-[40px] mb-[13px]" />
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Image alt="Person" width={32} height={32} priority src={person} />
                <span className="text-[#1B1A1A]">John Smith</span>
              </div>
              <span className="text-[#565656]">April 22, 2021</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default RelatedArticles
