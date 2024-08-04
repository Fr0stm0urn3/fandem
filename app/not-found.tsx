import { FaExclamationTriangle } from "react-icons/fa"
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <section className="bg-black min-h-screen flex-grow mt-32">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-pink-600 px-6 py-24 mb-4 shadow-md rounded-md m-4 md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="text-8xl text-pink-400" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4 mb-2 text-black">Page Not Found</h1>
            <p className="text-black text-xl mb-10">
              The page you are looking for does not exist.
            </p>
            <Link
              href="/"
              className="bg-pink-700 hover:bg-red-800 text-white font-bold py-4 px-6 rounded-xl transition duration-300 hover:text-black"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  )
}

export default NotFoundPage
