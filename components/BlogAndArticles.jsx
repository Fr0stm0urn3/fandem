import Link from "next/link"
import MiniTitle from "./MiniTitle"
import ArrowTopRightButton from "./ArrowTopRightButton"
import Image from "next/image"
import person from "../public/assets/images/Person.png"
import cardImg from "../public/assets/images/image 49.png"

const BlogAndArticles = () => {
  return (
    <article className="mb-[189px] lg:mb-[229px] px-4 2xl:px-0 lg:block container mx-auto  flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center   ">
        <div className="z-10">
          <MiniTitle title="Recent & Stories" />
          <h3 className="text-[40px] lg:text-[50px] mt-2 lg:mt-3">Blog & Articles</h3>
        </div>
        <div>
          <p className="w-[350px] lg:w-[468px] mb-8 lg:mb-[30px] text-[#BEBEBE] leading-[27.2px]">
            We partner with the most forward-thinking global IP rights owners across
            sports, gaming
          </p>
          <ArrowTopRightButton content={"View All News"} href="/blog" />
        </div>
      </div>
      {/* Cards */}
      <div
        //         className="flex flex-col justify-between items-center lg:flex-row mt-[58px] lg:mt-[70px] lg:min-w-[1000px] gap-2 lg:-ml-14 xl:container xl:ml-0
        // "
        className="flex flex-wrap justify-center items-center gap-[30px] xl:justify-between mt-[58px] lg:mt-[70px]"
      >
        {/* Card 1 */}
        <div className="w-[370px] h-[474px] border border-[#888888] rounded-[10px]">
          <div className="flex flex-col p-[20px] lg:p-[34px] mx-auto ">
            <h5 className="text-[18px] font-[600] text-[#BEBEBE]">Beige</h5>
            <h4 className="w-[354px] lg:w-[302px] mb-4 mt-[43px] font-[500] text-[30px]">
              Explained: What are NFTs and how you can invest safely
            </h4>
            <p className="leading-[27.2px] text-[#BEBEBE]">
              To avoid such fast-rising and free-falling valuations, you need to properly
              assess NFTs...
            </p>
            <div className="border border-[#494949] mt-[64px] mb-5 lg:mt-[63px] lg:mb-[14px]" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  alt="Person"
                  src={person}
                  priority
                />
                <span className="text-[#BEBEBE]">John Smith</span>
              </div>

              <div className="text-[#565656]">5 min read</div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="min-w-[370px] h-[474px] rounded-[10px] relative">
          <div className="w-full">
            <div className="absolute -z-10 w-full">
              <Image
                sizes="100vw"
                height={0}
                width={0}
                alt="Card Colorful"
                className="w-full"
                src={cardImg}
              />
            </div>
            <Link href={"/blog"}>
              <button
                className="flex gap-3 justify-center items-center text-[18px] group font-bold rounded-[10px] py-3 px-6 text-[#1B1A1A] bg-[#FFFFFF] 
            hover:bg-[#FFA800] hover:text-white  active:bg-[#D69516]  active:[#fff] transition absolute bottom-[24px] left-[34px] right-[34px]"
              >
                Read More
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
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[370px] h-[474px] border border-[#888888] rounded-[10px] ">
          <div className="flex flex-col p-[20px] lg:p-[34px] ">
            <h5 className="text-[18px] font-[600] text-[#BEBEBE]">Beige</h5>
            <h4 className="w-[354px] lg:w-[302px] mb-4 mt-[43px] font-[500] text-[30px]">
              Explained: What are NFTs and how you can invest safely
            </h4>
            <p className="leading-[27.2px] text-[#BEBEBE]">
              To avoid such fast-rising and free-falling valuations, you need to properly
              assess NFTs...
            </p>
            <div className="border border-[#494949] mt-[64px] mb-5 lg:mt-[63px] lg:mb-[14px]" />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  sizes="100vw"
                  width={0}
                  height={0}
                  alt="Person"
                  src={person}
                  priority
                />
                <span className="text-[#BEBEBE]">John Smith</span>
              </div>

              <div className="text-[#565656]">5 min read</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogAndArticles
