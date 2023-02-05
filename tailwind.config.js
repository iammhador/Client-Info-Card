/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#13315C",
          secondary: "#40413b",
          accent: "#E5E5E1",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
