/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#17b25d",

          secondary: "#b26b20",

          accent: "#ccccff",

          neutral: "#1D2025",

          "base-100": "#FCFCFD",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
