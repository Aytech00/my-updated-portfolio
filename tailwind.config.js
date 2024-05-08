/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      gridTemplateColumns: {
        sidebar: "270px 1150px",
        xlsidebar: "270px 1640px", 
      },
      gridTemplateRows: {
        header: "64px auto", 
      },
      colors: {
        "secondary": "#64ffda"
      },

      fontFamily: {
        main: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
