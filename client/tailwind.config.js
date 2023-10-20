/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Volkhov: ["Volkhov"],
        Poppins: ["Poppins"],
      },
    },
    screens: {
      xs: "175px",
      sm: "590px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      darkBlue: "#1E2833",
      lightestBlue: "#EDF0F8",
      lightBlue: "#3182CE",
      PrimaryBlue: "#3A4980",
      blueSlate: "F7FAFC",
      red: "#FF4343",
      orange: "#D48D3B",
      lightOrange: "#FBF3EA",
      green: "#3E9242",
      slate: "#726C6C",
      lightSlate: "#B9BBBF",
      lightestSlate: "#F3F3F3",
      white: "#FFFFFF",
      black: "#1E1E1E",
      yellow: "#FCA120",
      lightBrown: "#B5AA8F",
    },
  },
  plugins: [],
};
