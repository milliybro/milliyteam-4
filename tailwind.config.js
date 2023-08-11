/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./**/*.{html,js}","./src/**/*.{html,js}","./pages/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    },
    screens: {
      sm: "600px",
      md: "800px",
      lg: "1000px",
      xl: "1250px",
      xxl: "1500px",
    },
    colors: {
      primary: "#FFC000",
      secondary: "#F2F3F7",
      white: "white",
      grey1: "rgba(57, 65, 73, 0.50)",
      grey: "grey",
      blue: "blue",
      black: "black",
      btn: "rgba(0, 0, 0, 0.05)",
      bg_pr: "#FAFAFA",
      bg_second: "rgba(245, 138, 7, 0.10)",
      bl_gradient: "#0C0926",
      input: "#DBDEE7,",
      tab: "rgba(6, 50, 85, 0.30),",
      apply: "rgba(193, 228, 255, 0.30),",


    },
    container: {
      padding: "20px",
      maxWidth: {
        sm: "500px",
        md: "700px",
        lg: "900px",
        xl: "1100px",
        xxl: "1300px",
      },
    },
  },
  plugins: [],
};
