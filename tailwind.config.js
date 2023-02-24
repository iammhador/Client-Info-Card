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
          neutral: "#1D2025",
          info: "#999",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
