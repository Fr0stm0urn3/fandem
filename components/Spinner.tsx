"use client"

import ClipLoader from "react-spinners/ClipLoader"
import React = require("react")

type SpinnerProps = {
  loading: boolean
}

const override = {
  display: "block",
  margin: "150px auto",
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <ClipLoader
      loading={loading}
      color="#333"
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  )
}

export default Spinner
