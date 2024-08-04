const Button = ({ btn, arrowColor }: any) => {
  return (
    <button
      className={`flex gap-3 justify-center items-center text-[18px] group font-bold rounded-[10px] py-3 px-6 ${
        btn.textColor
      } ${btn.bgColor} ${btn.mb} ${btn.wFull ? "w-full" : btn.px6} ${btn.mx}
        ${btn.hoverBg} ${btn.hoverText}  ${btn.activeBg}  ${btn.activeText} 
      ${btn.className}
        `}
    >
      {btn.content}
      <span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${btn.arrowColor} group-hover:fill-[#fff] transition duration-300 `}
        >
          <path
            d="M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z"
            fill={btn.arrowColor}
          />
        </svg>
      </span>
    </button>
  )
}

export default Button
