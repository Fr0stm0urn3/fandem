import "./globals.css"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Inter } from "next/font/google"
import { GlobalProvider } from "../context/GlobalContext"
import localFont from "next/font/local"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Metadata } from "next"
import Head from "next/head"

const url = "https://Fandem.vercel.app/"

const inter = Inter({ subsets: ["latin"] })

export const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
})

export const prompt = localFont({
  src: [
    {
      path: "../public/fonts/prompt/Prompt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/prompt/Prompt-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/prompt/Prompt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
})

export const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins/Poppins-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(url),
  keywords: [
    "Artificial Intelligence",
    "AI",
    "Generation API",
    "Powerful AI",
    "Image Generation Models",
    "Headshot API",
  ],
  title: {
    default: "Fandem",
    template: "%s | Fandem",
  },
  openGraph: {
    description:
      "Discover cutting-edge AI solutions and innovations at our AI-powered website, leveraging advanced technologies to transform your digital experience and drive smarter decision-making.",
    // images:[]
  },
}

function HeadMeta() {
  return (
    <Head>
      <meta
        property="og:image"
        content={`fandem-ai.vercel.app/assets/images/FandemCover.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={"fandem-ai.vercel.app/assets/images/FandemCover.png"}
      />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
  )
}

export default function RootLayout({ children }: any) {
  return (
    <GlobalProvider>
      <html lang="en" className="scroll-smooth">
        <HeadMeta />
        <body className={`${gilroy.className}`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </GlobalProvider>
  )
}
