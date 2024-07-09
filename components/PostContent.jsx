import Image from "next/image"
import postContentImgOne from "../public/assets/images/image 1298.png"
import postContentImgOneMobile from "../public/assets/images/image 1298 (1).png"
import postContentImgTwo from "../public/assets/images/image 1299.png"
import postContentImgTwoMobile from "../public/assets/images/image 1299 (1).png"

const PostContent = () => {
  return (
    <section className="container mx-auto text-[#1B1A1A] px-4 lg:px-[100px] flex flex-col items-center">
      <div>
        <div className="my-10">
          <h4 className="text-[30px] w-[343px] md:w-full md:text-[40px] md:font-[500] leading-[30px] lg:leading-[48px]">
            Lorem ipsum dolor sit amet.
          </h4>
          <p className="text-[#555] w-[450px] md:w-[700px] lg:w-[800px] xl:w-[990px] mt-5 mb-4 leading-[27.2px]">
            Congue eu consequat ac felis donec et odio pellentesque diam. Lobortis mattis
            aliquam faucibus purus in massa tempor nec feugiat. Nec nam aliquam sem et
            tortor consequat id. Tristique senectus et netus et malesuada fames. Risus
            commodo viverra maecenas accumsan. Eget gravida cum sociis natoque penatibus
            et magnis dis. Sit amet consectetur adipiscing elit duis. Leo urna molestie at
            elementum eu facilisis sed. Id venenatis a condimentum vitae sapien
            pellentesque. Malesuada fames ac turpis egestas integer eget. Tincidunt augue
            interdum velit euismod in pellentesque massa placerat. Vivamus arcu felis
            bibendum ut tristique. Lacinia at quis risus sed vulputate. Morbi tristique
            senectus et netus et. Est placerat in egestas erat imperdiet sed.
          </p>
          <p className="text-[#555] w-[450px] md:w-[700px] lg:w-[800px] xl:w-[990px] leading-[27.2px]">
            Ut venenatis tellus in metus vulputate eu. Vestibulum rhoncus est pellentesque
            elit ullamcorper dignissim. Suspendisse interdum consectetur libero id
            faucibus nisl. Elementum tempus egestas sed sed risus. Pellentesque id nibh
            tortor id aliquet lectus proin nibh nisl. Ut pharetra sit amet aliquam. Sed
            blandit libero volutpat sed. Velit scelerisque in dictum non. Egestas
            fringilla phasellus faucibus scelerisque eleifend donec pretium. Sit amet
            luctus venenatis lectus magna. Venenatis urna cursus eget nunc.
          </p>
        </div>
        <div>
          <h5 className="text-[24px] lg:text-[30px] font-[500] leading-[24px] mb-4">
            Lorem ipsum
          </h5>
          <p className="text-[#555] w-[450px] md:w-[700px] lg:w-[800px] xl:w-[990px] leading-[27.2px] mb-4">
            Ligula ullamcorper malesuada proin libero nunc consequat interdum.
            Pellentesque habitant morbi tristique senectus et netus et malesuada. Purus in
            massa tempor nec feugiat nisl pretium fusce id. Tortor pretium viverra
            suspendisse potenti nullam ac tortor. Egestas integer eget aliquet nibh.{" "}
          </p>
          <Image
            alt="Artistic Cubes"
            sizes="100vw"
            height={0}
            width={0}
            className="hidden md:block"
            priority
            src={postContentImgOne}
          />
          <Image
            alt="Artistic Cubes"
            sizes="100vw"
            height={0}
            width={0}
            className="md:hidden w-[440px]"
            priority
            src={postContentImgOneMobile}
          />
        </div>
        <div>
          <h5 className="text-[24px] lg:text-[30px] font-[500] leading-[24px] mb-4 mt-6 lg:mt-10">
            Lorem ipsum
          </h5>
          <p className="text-[#555] w-[450px] md:w-[700px] lg:w-[800px] xl:w-[990px] leading-[27.2px]">
            d diam maecenas ultricies mi eget mauris pharetra et. Mauris vitae ultricies
            leo integer malesuada nunc vel. Leo integer malesuada nunc vel. Venenatis urna
            cursus eget nunc scelerisque viverra mauris. At quis risus sed vulputate odio
            ut enim blandit. Feugiat in ante metus dictum at. Est ante in nibh mauris. In
            ante metus dictum at. Vulputate odio ut enim blandit volutpat maecenas
            volutpat blandit aliquam. Sed vulputate odio ut enim. Convallis convallis
            tellus id interdum velit. Blandit aliquam etiam erat velit scelerisque in
            dictum non consectetur. Tellus molestie nunc non blandit massa enim nec dui.{" "}
          </p>
          <Image
            alt="Artistic White Board"
            sizes="100vw"
            height={0}
            width={0}
            className="md:mt-[22px] md:mb-[18px] md:block hidden"
            priority
            src={postContentImgTwo}
          />
          <Image
            alt="Artistic Cubes"
            sizes="100vw"
            height={0}
            width={0}
            className="md:hidden w-[440px] my-4"
            priority
            src={postContentImgTwoMobile}
          />
          <p className="text-[#555] w-[450px] md:w-[700px] lg:w-[800px] xl:w-[990px] leading-[27.2px] ">
            Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Adipiscing
            elit pellentesque habitant morbi tristique senectus et netus. Aenean sed
            adipiscing diam donec adipiscing tristique. Placerat vestibulum lectus mauris
            ultrices eros in cursus. Aliquam ultrices sagittis orci a. Molestie at
            elementum eu facilisis sed odio morbi quis commodo. In aliquam sem fringilla
            ut morbi. Ornare massa eget egestas purus viverra accumsan in nisl nisi. In
            massa tempor nec feugiat nisl pretium fusce. Enim lobortis scelerisque
            fermentum dui faucibus in. Dolor magna eget est lorem ipsum.
          </p>
        </div>
        <div className="mt-[24px] md:mt-[27px] mb-6 md:mb-10 bg-[#F8F9FA] p-6 md:p-[30px] self-start">
          <h5 className="font-[gilroy] italic text-lg md:text-[30px] leading-[21.6px] md:leading-[30px] w-[295px] mb-4 md:w-full">
            “Lorem ipsum Tellus orci ac auctor augue mauris augue.”
          </h5>
          <div>Joshua Porter</div>
        </div>
        <div>
          <h5 className="text-[24px] lg:text-[30px] font-[500] leading-[24px] mb-4 lg:mb-5">
            Lorem ipsum
          </h5>
          <p className="text-[#555] w-[450px] md:w-[700px] lg:w-[820px] xl:w-[1010px] leading-[27.2px]">
            Accumsan lacus vel facilisis volutpat est. Mauris nunc congue nisi vitae
            suscipit tellus. Purus viverra accumsan in nisl nisi scelerisque. Tellus orci
            ac auctor augue mauris augue.{" "}
          </p>
          <h6 className="font-semibold text-lg mt-6 mb-4 lg:my-5">Lorem ipsum:</h6>
          <ul className="list-disc ml-6 md:ml-16 space-y-[8px] lg:space-y-4 mb-6 md:mb-5">
            <li className="text-[#555]">Accumsan lacus vel facilisis volutpat est.</li>
            <li className="text-[#555]">Accumsan lacus vel </li>
            <li className="text-[#555]">Accumsan lacus vel facilisis </li>
            <li className="text-[#555]">Accumsan lacus vel facilisis volutpat est.</li>
            <li className="text-[#555]">Accumsan lacus vel facilisis volutpat </li>
          </ul>
          <p className="text-[#555] w-[450px] md:w-[700px] lg:w-[800px] xl:w-[1005px] leading-[27.2px] ">
            Accumsan lacus vel facilisis volutpat est. Mauris nunc congue nisi vitae
            suscipit tellus. Purus viverra accumsan in nisl nisi scelerisque. Tellus orci
            ac auctor augue mauris augue. Dictum at tempor commodo ullamcorper a lacus
            vestibulum sed. Lacus luctus accumsan tortor posuere ac ut consequat semper
            viverra. Nisi vitae suscipit tellus mauris a diam maecenas. Et tortor at risus
            viverra adipiscing at. Mi eget mauris pharetra et ultrices. Tristique senectus
            et netus et malesuada. Tellus orci ac auctor augue mauris augue. Odio ut enim
            blandit volutpat maecenas volutpat. Sit amet justo donec enim diam vulputate
            ut pharetra sit. Orci nulla pellentesque dignissim enim sit amet.
          </p>
          <div className="text-[#555] my-5 md:my-4 w-[343px] md:w-full leading-[27.2px]">
            Learn more about how to measure your website's traffic and performance.
          </div>
        </div>
        <div className="border border-[#D4D4D4] mt-5 mb-[23px] w-full" />
        <div className="flex items-center gap-6 mb-[56.95px] lg:mb-[121px] self-start">
          <span>Share:</span>
          <span>
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.949951"
                width="38"
                height="36.1"
                rx="18.05"
                fill="url(#paint0_linear_1_2094)"
              />
              <path
                d="M20.7416 28.4999V19.8331H23.8038L24.2623 16.4555H20.7416V14.299C20.7416 13.3211 21.0275 12.6546 22.5037 12.6546L24.3864 12.6538V9.63295C24.0606 9.59193 22.9431 9.5 21.643 9.5C18.9285 9.5 17.0701 11.074 17.0701 13.9647V16.4556H14V19.8332H17.07V28.5L20.7416 28.4999Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_2094"
                  x1="-21.5764"
                  y1="-59.1646"
                  x2="-148.3"
                  y2="-11.8208"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#201F20" />
                  <stop offset="0.609375" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.949951"
                width="38"
                height="36.1"
                rx="18.05"
                fill="url(#paint0_linear_1_2091)"
              />
              <path
                d="M27.8068 15.431C27.8068 15.6131 27.8068 15.7951 27.8068 15.9512C27.8068 21.3345 23.4815 27.55 15.5974 27.55C13.161 27.55 10.9163 26.8739 9 25.7296C9.3285 25.7556 9.68438 25.7816 10.0129 25.7816C12.0113 25.7816 13.8728 25.1314 15.351 24.0392C13.4622 24.0132 11.8744 22.8169 11.3543 21.2045C11.628 21.2565 11.8744 21.2825 12.1755 21.2825C12.5588 21.2825 12.942 21.2305 13.2979 21.1264C11.3269 20.7623 9.84863 19.1239 9.84863 17.1474C9.84863 17.1214 9.84863 17.1214 9.84863 17.0954C10.4235 17.4075 11.0805 17.5896 11.7923 17.6156C10.6425 16.8874 9.87601 15.6391 9.87601 14.2087C9.87601 13.4545 10.095 12.7524 10.4509 12.1542C12.5588 14.6248 15.7343 16.2372 19.2931 16.4193C19.2109 16.1332 19.1836 15.7951 19.1836 15.483C19.1836 13.2205 21.0998 11.4 23.4815 11.4C24.7134 11.4 25.8357 11.8941 26.6023 12.6743C27.5878 12.4923 28.4911 12.1542 29.3398 11.6861C29.0113 12.6483 28.3269 13.4285 27.4509 13.9487C28.3269 13.8446 29.1481 13.6366 29.9147 13.2985C29.3671 14.1307 28.6554 14.8589 27.8068 15.431Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_2091"
                  x1="-21.5764"
                  y1="-59.1646"
                  x2="-148.3"
                  y2="-11.8208"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#201F20" />
                  <stop offset="0.609375" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.949951"
                width="38"
                height="36.1"
                rx="18.05"
                fill="url(#paint0_linear_1_2088)"
              />
              <path
                d="M15.6672 19C15.6672 17.2512 17.1591 15.8331 19 15.8331C20.8409 15.8331 22.3336 17.2512 22.3336 19C22.3336 20.7488 20.8409 22.1669 19 22.1669C17.1591 22.1669 15.6672 20.7488 15.6672 19ZM13.8651 19C13.8651 21.6942 16.164 23.8781 19 23.8781C21.836 23.8781 24.1349 21.6942 24.1349 19C24.1349 16.3058 21.836 14.1219 19 14.1219C16.164 14.1219 13.8651 16.3058 13.8651 19ZM23.1382 13.9284C23.1381 14.1539 23.2084 14.3743 23.3401 14.5619C23.4719 14.7494 23.6593 14.8956 23.8785 14.9819C24.0977 15.0683 24.339 15.091 24.5718 15.0471C24.8046 15.0032 25.0185 14.8947 25.1863 14.7353C25.3542 14.576 25.4686 14.3729 25.515 14.1518C25.5614 13.9306 25.5377 13.7014 25.447 13.4931C25.3563 13.2847 25.2025 13.1066 25.0052 12.9813C24.808 12.8559 24.576 12.789 24.3386 12.7889H24.3382C24.02 12.789 23.715 12.9091 23.49 13.1228C23.265 13.3365 23.1384 13.6262 23.1382 13.9284ZM14.96 26.7328C13.985 26.6906 13.4551 26.5363 13.103 26.406C12.6361 26.2333 12.303 26.0276 11.9527 25.6954C11.6025 25.3631 11.3857 25.0469 11.2047 24.6034C11.0674 24.269 10.905 23.7654 10.8607 22.8392C10.8122 21.8378 10.8026 21.537 10.8026 19.0001C10.8026 16.4631 10.813 16.1631 10.8607 15.1609C10.9051 14.2347 11.0687 13.7321 11.2047 13.3967C11.3865 12.9532 11.603 12.6367 11.9527 12.304C12.3025 11.9713 12.6353 11.7653 13.103 11.5934C13.455 11.463 13.985 11.3087 14.96 11.2666C16.0141 11.2206 16.3307 11.2114 19 11.2114C21.6693 11.2114 21.9862 11.2213 23.0412 11.2666C24.0162 11.3088 24.5452 11.4642 24.8982 11.5934C25.3651 11.7653 25.6982 11.9717 26.0485 12.304C26.3987 12.6363 26.6147 12.9532 26.7965 13.3967C26.9338 13.7311 27.0962 14.2347 27.1405 15.1609C27.189 16.1631 27.1986 16.4631 27.1986 19.0001C27.1986 21.537 27.189 21.837 27.1405 22.8392C27.0961 23.7654 26.9329 24.2689 26.7965 24.6034C26.6147 25.0469 26.3982 25.3634 26.0485 25.6954C25.6987 26.0273 25.3651 26.2333 24.8982 26.406C24.5462 26.5364 24.0162 26.6907 23.0412 26.7328C21.9871 26.7788 21.6705 26.788 19 26.788C16.3295 26.788 16.0138 26.7788 14.96 26.7328ZM14.8772 9.55753C13.8126 9.60359 13.0852 9.76395 12.4499 9.99879C11.792 10.2413 11.235 10.5667 10.6785 11.0946C10.1219 11.6225 9.78032 12.1524 9.52504 12.7774C9.27784 13.3813 9.10904 14.072 9.06056 15.0833C9.01128 16.0963 9 16.4201 9 19C9 21.5799 9.01128 21.9037 9.06056 22.9167C9.10904 23.9281 9.27784 24.6187 9.52504 25.2226C9.78032 25.8472 10.122 26.3778 10.6785 26.9054C11.235 27.4331 11.792 27.758 12.4499 28.0012C13.0864 28.2361 13.8126 28.3964 14.8772 28.4425C15.944 28.4885 16.2843 28.5 19 28.5C21.7157 28.5 22.0566 28.4893 23.1228 28.4425C24.1874 28.3964 24.9144 28.2361 25.5501 28.0012C26.2076 27.758 26.765 27.4333 27.3215 26.9054C27.8781 26.3775 28.219 25.8472 28.475 25.2226C28.7222 24.6187 28.8918 23.928 28.9394 22.9167C28.9879 21.903 28.9992 21.5799 28.9992 19C28.9992 16.4201 28.9879 16.0963 28.9394 15.0833C28.891 14.0719 28.7222 13.3809 28.475 12.7774C28.219 12.1528 27.8772 11.6233 27.3215 11.0946C26.7658 10.5658 26.2076 10.2413 25.5509 9.99879C24.9144 9.76395 24.1874 9.60283 23.1236 9.55753C22.0574 9.51148 21.7165 9.5 19.0008 9.5C16.2851 9.5 15.944 9.51072 14.8772 9.55753Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_2088"
                  x1="-21.5764"
                  y1="-59.1646"
                  x2="-148.3"
                  y2="-11.8208"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#201F20" />
                  <stop offset="0.609375" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="38"
                height="38"
                rx="19"
                fill="url(#paint0_linear_1_1708)"
              />
              <g clipPath="url(#clip0_1_1708)">
                <path
                  d="M29.995 30V29.9991H30V22.6641C30 19.0758 29.2275 16.3116 25.0324 16.3116C23.0158 16.3116 21.6624 17.4183 21.1099 18.4675H21.0516V16.6466H17.0741V29.9991H21.2158V23.3875C21.2158 21.6466 21.5458 19.9633 23.7016 19.9633C25.8258 19.9633 25.8574 21.95 25.8574 23.4991V30H29.995Z"
                  fill="white"
                />
                <path d="M10.33 16.6477H14.4766V30.0002H10.33V16.6477Z" fill="white" />
                <path
                  d="M12.4017 10C11.0758 10 10 11.0758 10 12.4017C10 13.7275 11.0758 14.8258 12.4017 14.8258C13.7275 14.8258 14.8033 13.7275 14.8033 12.4017C14.8025 11.0758 13.7267 10 12.4017 10V10Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1_1708"
                  x1="-20.5764"
                  y1="-62.2784"
                  x2="-148.832"
                  y2="-16.7583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#201F20" />
                  <stop offset="0.609375" stopColor="white" />
                </linearGradient>
                <clipPath id="clip0_1_1708">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(10 10)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </section>
  )
}

export default PostContent
