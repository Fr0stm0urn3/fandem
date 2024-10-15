import Link from "next/link"

const FooterHeader = () => {
  return (
    <section
      id="careers"
      className="container mx-auto mb-[100px] lg:mb-[150px] z-10 px-4 lg:px-[135px]"
    >
      <div className="flex flex-col justify-center items-center  py-14 px-[16px] lg:py-[105px] md:px-[220px] lg:px-[168px]  rounded-[40px] footerCard bg-[#BEBEBE] bg-opacity-20">
        <h3 className="text-[30px] lg:text-[40px] font-[600] md:font-[500] leading-[48px] text-center w-[300px] sm:w-[335px]  md:w-[435px] lg:w-[635px]">
          Join our team and let's start working together{" "}
        </h3>
        <p className="text-[16px] leading-[27.2px] text-center text-[#BEBEBE]  w-[280px] sm:w-[404px] md:w-[504px] mt-4 mb-10">
          You can apply for any of the roles on our Careers Page. If you are interested in
          joining our team, but do not see a specific role that aligns, please contact us
          directly
        </p>
        <div className="flex flex-col xl:flex-row justify-center gap-[16px] xl:gap-[26px] w-full">
          <button
            type="submit"
            className="flex gap-3 justify-center items-center text-[18px] group font-bold rounded-[10px] py-3 px-6 text-[#1B1A1A] bg-[#FFFFFF] h-[56px]
      hover:bg-[#FFA800] hover:text-white active:bg-[#D69516] active:[#fff] transition w-full xl:w-fit"
          >
            Start Career
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
          <Link href="#contact">
            <button
              type="submit"
              className="flex gap-3 justify-center items-center text-[18px] group font-bold rounded-[10px] py-3 px-6 text-white  border border-white h-[56px]
            hover:bg-[white] hover:text-[#1B1A1A] transition  w-full xl:w-fit"
            >
              Contact Us
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-white group-hover:fill-[#1B1A1A] group-hover:-translate-y-0.5 group-hover:scale-125 transition-transform duration-500`}
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
    </section>
  )
}

export default FooterHeader
