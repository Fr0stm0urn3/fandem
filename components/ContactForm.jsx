"use client"

import { useState } from "react"
import MiniTitle from "./MiniTitle"

const ContactForm = () => {
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [emailValue, setEmailValue] = useState("")
  const [isFullNameValid, setIsFullNameValid] = useState(true)
  const [fullNameValue, setFullNameValue] = useState("")
  const [isMessageValid, setIsMessageValid] = useState(true)
  const [messageValue, setMessageValue] = useState("")

  const handleFullNameChange = (e) => {
    const { value } = e.target

    setFullNameValue(value)

    // console.log(value.replace(/[\W]/g, " ").split(" ").length)

    setIsFullNameValid(value.replace(/[\W]/g, " ").split(" ").length >= 2)
  }

  const handleInputChange = (e) => {
    const { value } = e.target

    setEmailValue(value)

    setIsEmailValid(value.includes("@"))
  }

  const handleMessageChange = (e) => {
    const { value } = e.target

    setMessageValue(value)
    setIsMessageValid(messageValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!fullNameValue) {
      setIsFullNameValid(false)
    }
    if (!emailValue || !emailValue.split("").includes("@")) {
      setIsEmailValid(false)
    }
    if (!messageValue) {
      setIsMessageValid(false)
    }
  }

  return (
    <section
      id="contact"
      className="container mx-auto flex justify-center xl:justify-end mb-[246px] z-10"
    >
      <div className="w-[470px] z-10">
        <MiniTitle title={"Future Cooperation"} />
        <h3 className="text-[50px] mb-[50px]">Contact Us</h3>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label
            className={`mb-[14px] font-[gilroy] ${
              isFullNameValid ? "text-white" : "text-[#FF7777]"
            }`}
            htmlFor="name"
          >
            Full name:
          </label>
          <input
            className="h-[54px] rounded-[10px] border border-[#b7b7b7] border-opacity-30 bg-[#fff] bg-opacity-0 mb-6 text-white p-4 focus:outline-none font-[gilroy]"
            type="text"
            id="name"
            name="name"
            value={fullNameValue}
            onChange={handleFullNameChange}
          />
          <label
            className={`mb-[14px] font-[gilroy] ${
              isEmailValid ? "text-white" : "text-[#FF7777]"
            }`}
            htmlFor="email"
          >
            Email address:
          </label>
          <input
            className="h-[54px] rounded-[10px] border  border-[#b7b7b7] border-opacity-30 bg-[#fff] bg-opacity-0 mb-6 text-white p-4 focus:outline-none font-[gilroy]"
            type="text"
            id="email"
            name="email"
            value={emailValue}
            onChange={handleInputChange}
          />
          <label
            className={`mb-[14px] font-[gilroy] ${
              isMessageValid ? "text-white" : "text-[#FF7777]"
            }`}
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            className="rounded-[10px] border border-[#b7b7b7] border-opacity-30 bg-[#fff] bg-opacity-0 h-[120px] text-white p-4 focus:outline-none font-[gilroy]"
            value={messageValue}
            onChange={handleMessageChange}
          />
          <button
            type="submit"
            className="flex gap-3 justify-center items-center text-[18px] group font-bold rounded-[10px] py-3 px-6 text-[#1B1A1A] bg-[#FFFFFF] 
      hover:bg-[#FFA800] hover:text-white active:bg-[#D69516] active:[#fff] transition mt-[40px]  xl:w-fit"
          >
            Send Message
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
        </form>
      </div>
    </section>
  )
}

export default ContactForm
