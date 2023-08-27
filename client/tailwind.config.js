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
    // colors: {
    //   lightestBlue: "#EDF0F8",
    //   PrimaryBlue: "#3A4980",
    // },
  },
  plugins: [],
};
