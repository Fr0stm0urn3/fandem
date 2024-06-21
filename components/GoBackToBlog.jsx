import Link from "next/link"

const GoBackToBlog = () => {
  return (
    <Link
      className="container mx-auto flex items-center gap-[10px] text-[#1B1A1A] text-[14px] mt-[24px] lg:mt-[53px] mb-8 lg:mb-10 px-4 "
      href={"/blog"}
    >
      <span>
        <svg
          width="24"
          height="12"
          viewBox="0 0 24 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403806 6.01041 0.403806 6.3033 0.696699C6.59619 0.989593 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM24 6.75L1 6.75V5.25L24 5.25V6.75Z"
            fill="#1B1A1A"
          />
        </svg>
      </span>
      Back to Blog
    </Link>
  )
}

export default GoBackToBlog