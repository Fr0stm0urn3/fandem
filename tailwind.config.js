/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // fontFamily: {
      //   gilroy: ["Prompt", "Gilroy"],
      // },
      container: {
        // screens: {
        //   md: "700px",
        //   lg: "970px",
        //   xl: "1240px",
        //   "2xl": "1440px",
        // },
        // screens: {
        //   md: "700px",
        //   lg: "970px",
        //   xl: "1140px",
        //   "2xl": "1240px",
        // },
        screens: {
          md: "700px",
          lg: "970px",
          xl: "1100px",
          "2xl": "1200px",
        },
      },
    },
  },
  plugins: [],
}
