/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#845D2A",
      secondary: "#181818",
      white: "#FFF",
      grayish: "#777777",
      "light-dark": "#252B21",

      redish: "#fd6565",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      poppins: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
};

