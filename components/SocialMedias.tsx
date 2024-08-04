import Link from "next/link"

const SocialMedias = ({ width, height, gWidthHeight, className }: any) => {
  return (
    <div className={className}>
      <Link href={"/https://www.facebook.com"} target="_blank">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
          >
            <g filter="url(#filter0_d_1_2300)">
              <rect
                x="5"
                y="1"
                width={gWidthHeight}
                height={gWidthHeight}
                rx="19"
                fill="url(#paint0_linear_1_2300)"
              />
              <path
                d="M25.7416 29.9999V20.8769H28.8038L29.2623 17.3216H25.7416V15.0516C25.7416 14.0222 26.0275 13.3207 27.5037 13.3207L29.3864 13.3198V10.1399C29.0606 10.0968 27.9431 10 26.643 10C23.9285 10 22.0701 11.6568 22.0701 14.6996V17.3217H19V20.877H22.07V30L25.7416 29.9999Z"
                fill="#A1A1A1"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_2300"
                x="0"
                y="0"
                width={width}
                height={height}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_2300"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_2300"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_2300"
                x1="-16.5764"
                y1="-62.2784"
                x2="-144.832"
                y2="-16.7583"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#201F20" />
                <stop offset="0.609375" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </Link>
      <Link href={"https://x.com/home"} target="_blank">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
          >
            <g filter="url(#filter0_d_1_2297)">
              <rect
                x="5"
                y="1"
                width={gWidthHeight}
                height={gWidthHeight}
                rx="19"
                fill="url(#paint0_linear_1_2297)"
              />
              <path
                d="M32.8068 16.2432C32.8068 16.4348 32.8068 16.6264 32.8068 16.7907C32.8068 22.4573 28.4815 29 20.5974 29C18.161 29 15.9163 28.2882 14 27.0837C14.3285 27.1111 14.6844 27.1385 15.0129 27.1385C17.0113 27.1385 18.8728 26.4541 20.351 25.3043C18.4622 25.277 16.8744 24.0177 16.3543 22.3205C16.628 22.3752 16.8744 22.4026 17.1755 22.4026C17.5588 22.4026 17.942 22.3478 18.2979 22.2383C16.3269 21.8551 14.8486 20.1304 14.8486 18.0499C14.8486 18.0225 14.8486 18.0225 14.8486 17.9952C15.4235 18.3237 16.0805 18.5153 16.7923 18.5427C15.6425 17.7762 14.876 16.4622 14.876 14.9565C14.876 14.1626 15.095 13.4235 15.4509 12.7939C17.5588 15.3945 20.7343 17.0918 24.2931 17.2834C24.2109 16.9823 24.1836 16.6264 24.1836 16.2979C24.1836 13.9163 26.0998 12 28.4815 12C29.7134 12 30.8357 12.5201 31.6023 13.3414C32.5878 13.1498 33.4911 12.7939 34.3398 12.3011C34.0113 13.314 33.3269 14.1353 32.4509 14.6828C33.3269 14.5733 34.1481 14.3543 34.9147 13.9984C34.3671 14.8744 33.6554 15.6409 32.8068 16.2432Z"
                fill="#A1A1A1"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_2297"
                x="0"
                y="0"
                width={width}
                height={height}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_2297"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_2297"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_2297"
                x1="-16.5764"
                y1="-62.2784"
                x2="-144.832"
                y2="-16.7583"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#201F20" />
                <stop offset="0.609375" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </Link>

      <Link href={"https://www.instagram.com/"} target="_blank">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
          >
            <g filter="url(#filter0_d_1_2294)">
              <rect
                x="5"
                y="1"
                width={gWidthHeight}
                height={gWidthHeight}
                rx="19"
                fill="url(#paint0_linear_1_2294)"
              />
              <path
                d="M20.6672 20C20.6672 18.1591 22.1591 16.6664 24 16.6664C25.8409 16.6664 27.3336 18.1591 27.3336 20C27.3336 21.8409 25.8409 23.3336 24 23.3336C22.1591 23.3336 20.6672 21.8409 20.6672 20ZM18.8651 20C18.8651 22.836 21.164 25.1349 24 25.1349C26.836 25.1349 29.1349 22.836 29.1349 20C29.1349 17.164 26.836 14.8651 24 14.8651C21.164 14.8651 18.8651 17.164 18.8651 20ZM28.1382 14.6615C28.1381 14.8989 28.2084 15.1309 28.3401 15.3283C28.4719 15.5257 28.6593 15.6796 28.8785 15.7705C29.0977 15.8614 29.339 15.8852 29.5718 15.839C29.8046 15.7928 30.0185 15.6786 30.1863 15.5109C30.3542 15.3431 30.4686 15.1293 30.515 14.8966C30.5614 14.6638 30.5377 14.4225 30.447 14.2032C30.3563 13.9839 30.2025 13.7964 30.0052 13.6645C29.808 13.5326 29.576 13.4621 29.3386 13.462H29.3382C29.02 13.4621 28.715 13.5886 28.49 13.8135C28.265 14.0384 28.1384 14.3434 28.1382 14.6615ZM19.96 28.1398C18.985 28.0954 18.4551 27.933 18.103 27.7958C17.6361 27.614 17.303 27.3975 16.9527 27.0478C16.6025 26.698 16.3857 26.3652 16.2047 25.8983C16.0674 25.5463 15.905 25.0162 15.8607 24.0413C15.8122 22.9872 15.8026 22.6706 15.8026 20.0001C15.8026 17.3296 15.813 17.0138 15.8607 15.9589C15.9051 14.9839 16.0687 14.4549 16.2047 14.1018C16.3865 13.635 16.603 13.3018 16.9527 12.9516C17.3025 12.6014 17.6353 12.3846 18.103 12.2036C18.455 12.0663 18.985 11.9039 19.96 11.8596C21.0141 11.8111 21.3307 11.8014 24 11.8014C26.6693 11.8014 26.9862 11.8119 28.0412 11.8596C29.0162 11.904 29.5452 12.0676 29.8982 12.2036C30.3651 12.3846 30.6982 12.6018 31.0485 12.9516C31.3987 13.3014 31.6147 13.635 31.7965 14.1018C31.9338 14.4538 32.0962 14.9839 32.1405 15.9589C32.189 17.0138 32.1986 17.3296 32.1986 20.0001C32.1986 22.6706 32.189 22.9863 32.1405 24.0413C32.0961 25.0162 31.9329 25.5462 31.7965 25.8983C31.6147 26.3652 31.3982 26.6983 31.0485 27.0478C30.6987 27.3972 30.3651 27.614 29.8982 27.7958C29.5462 27.933 29.0162 28.0954 28.0412 28.1398C26.9871 28.1882 26.6705 28.1979 24 28.1979C21.3295 28.1979 21.0138 28.1882 19.96 28.1398ZM19.8772 10.0606C18.8126 10.109 18.0852 10.2778 17.4499 10.525C16.792 10.7803 16.235 11.1228 15.6785 11.6785C15.1219 12.2342 14.7803 12.792 14.525 13.4499C14.2778 14.0856 14.109 14.8126 14.0606 15.8772C14.0113 16.9434 14 17.2843 14 20C14 22.7157 14.0113 23.0566 14.0606 24.1228C14.109 25.1874 14.2778 25.9144 14.525 26.5501C14.7803 27.2076 15.122 27.7661 15.6785 28.3215C16.235 28.877 16.792 29.219 17.4499 29.475C18.0864 29.7222 18.8126 29.891 19.8772 29.9394C20.944 29.9879 21.2843 30 24 30C26.7157 30 27.0566 29.9887 28.1228 29.9394C29.1874 29.891 29.9144 29.7222 30.5501 29.475C31.2076 29.219 31.765 28.8772 32.3215 28.3215C32.8781 27.7658 33.219 27.2076 33.475 26.5501C33.7222 25.9144 33.8918 25.1874 33.9394 24.1228C33.9879 23.0558 33.9992 22.7157 33.9992 20C33.9992 17.2843 33.9879 16.9434 33.9394 15.8772C33.891 14.8126 33.7222 14.0852 33.475 13.4499C33.219 12.7924 32.8772 12.235 32.3215 11.6785C31.7658 11.1219 31.2076 10.7803 30.5509 10.525C29.9144 10.2778 29.1874 10.1082 28.1236 10.0606C27.0574 10.0121 26.7165 10 24.0008 10C21.2851 10 20.944 10.0113 19.8772 10.0606Z"
                fill="#A1A1A1"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_2294"
                x="0"
                y="0"
                width={width}
                height={height}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_2294"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_2294"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_2294"
                x1="-16.5764"
                y1="-62.2784"
                x2="-144.832"
                y2="-16.7583"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#201F20" />
                <stop offset="0.609375" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </Link>
      <Link href={"https://www.linkedin.com/"} target="_blank">
        <svg
          width={gWidthHeight}
          height={gWidthHeight}
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width={gWidthHeight}
            height={gWidthHeight}
            rx="19"
            fill="url(#paint0_linear_7_173)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_7_173"
              x1="-21.5764"
              y1="-63.2784"
              x2="-149.832"
              y2="-17.7583"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#201F20" />
              <stop offset="0.609375" stopColor="white" />
            </linearGradient>
          </defs>

          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_7_174)">
              <path
                d="M29.9951 29.9999V29.999H30.0001V22.664C30.0001 19.0757 29.2276 16.3115 25.0326 16.3115C23.0159 16.3115 21.6626 17.4182 21.1101 18.4674H21.0517V16.6465H17.0742V29.999H21.2159V23.3874C21.2159 21.6465 21.5459 19.9632 23.7017 19.9632C25.8259 19.9632 25.8576 21.9499 25.8576 23.499V29.9999H29.9951Z"
                fill="#A1A1A1"
              />
              <path d="M10.3301 16.6475H14.4767V30H10.3301V16.6475Z" fill="#A1A1A1" />
              <path
                d="M12.4017 10C11.0758 10 10 11.0758 10 12.4017C10 13.7275 11.0758 14.8258 12.4017 14.8258C13.7275 14.8258 14.8033 13.7275 14.8033 12.4017C14.8025 11.0758 13.7267 10 12.4017 10V10Z"
                fill="#A1A1A1"
              />
            </g>
            <defs>
              <clipPath id="clip0_7_174">
                <rect width="20" height="20" fill="white" transform="translate(10 10)" />
              </clipPath>
            </defs>
          </svg>
        </svg>
      </Link>
    </div>
  )
}

export default SocialMedias
