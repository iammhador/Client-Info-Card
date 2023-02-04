/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5274b8",
          secondary: "#40413b",
          // accent: "#FQEBEB",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
