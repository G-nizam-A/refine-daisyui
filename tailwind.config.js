/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        colors: {
          transparent: "transparent",
          current: "currentColor",
          white: "#cccccc",
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#0d89ec",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: { xs: "0px 1px  2px 0px #0000003f" },
    },
  },
  plugins: [require("daisyui")],
};
