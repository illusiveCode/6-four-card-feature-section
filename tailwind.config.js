/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "400",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 78%, 62%)",
          cyan: "hsl(180, 62%, 55%)",
          orange: "hsl(34, 97%, 64%)",
          blue: "hsl(212, 86%, 64%)",
        },
        neutral: {
          "dark-blue": "hsl(234, 12%, 34%)",
          "grayish-blue": "hsl(229, 6%, 66%)",
          "light-gray": "hsl(0, 0%, 98%)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        heading: "3.5rem",
        subheading: "1.5rem",
        body: "15px",
      },
    },
  },
  plugins: [],
};
