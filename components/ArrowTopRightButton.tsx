import React from "react"
import Link from "next/link"

type ArrowTopRightButtonProps = {
  content: string
  href: string
  className?: string
  svgColor?: string
}

const ArrowTopRightButton: React.FC<ArrowTopRightButtonProps> = ({
  content,
  href,
  className,
  svgColor,
}) => {
  return (
    <Link
      href={href}
      className={`text-[18px] font-bold gap-[5px] ${className} group hover:text-[#FFA800] active:text-[#D69416]transition-all duration-300`}
    >
      {content}{" "}
      <span>
        <svg
          className="inline mb-1 "
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:fill-[#FFA800] group-active:fill-[#D69416] transition-all duration-300"
            d="M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z"
            fill={svgColor}
          />
        </svg>
      </span>
    </Link>
  )
}

export default ArrowTopRightButton
