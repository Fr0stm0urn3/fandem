import "./globals.css"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Inter } from "next/font/google"
import { GlobalProvider } from "../context/GlobalContext"

import { Metadata } from "next"
import Head from "next/head"

const url = "https://Fandem.vercel.app/"

const inter = Inter({ subsets: ["latin"] })

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
        content={`fandem-sigma.vercel.app/assets/images/FandemCover.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={"fandem-sigma.vercel.app/assets/images/FandemCover.png"}
      />
    </Head>
  )
}

export default function RootLayout({ children }: any) {
  return (
    <GlobalProvider>
      <html lang="en" className="scroll-smooth">
        <HeadMeta />
        <body className={`${inter.className}`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </GlobalProvider>
  )
}
