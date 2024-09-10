"use client"

import ClipLoader from "react-spinners/ClipLoader"

const override = {
  display: "block",
  margin: "150px auto",
}

type LoadingPageProps = {
  loading: boolean
}

const LoadingPage = ({ loading }: LoadingPageProps) => {
  return (
    <ClipLoader
      loading={loading}
      color="white"
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  )
}

export default LoadingPage
