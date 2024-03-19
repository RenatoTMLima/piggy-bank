import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        buff: {
          50: "#FBF5EE",
          100: "#F7EBDE",
          200: "#efd7bd",
          300: "#e7c39c",
          400: "#dfaf7c",
          500: "#d79b5b", // main
          600: "#cf873a",
          700: "#b5722c",
          800: "#945e24",
          900: "#73491c",
        },
        liver: {
          50: "#f8f3f2",
          100: "#f1e8e4",
          200: "#e2d0ca",
          300: "#d4b9af",
          400: "#c6a195",
          500: "#b88a7a",
          600: "#a97260",
          700: "#925f4f",
          800: "#654236", //main
          900: "#50342b",
        },
        vanilla: {
          50: "#f9f9f1",
          100: "#f3f2e2",
          200: "#e3e5c6",
          300: "#d6d4a0", //main
          400: "#cecc8d",
          500: "#c2bf70",
          600: "#b6b254",
          700: "#9d9a43",
          800: "#817e37",
          900: "#64622b",
        },
        cocoa: {
          50: "#fcf3ee",
          100: "#f9e6dc",
          200: "#efc5a9",
          300: "#e9ae86",
          400: "#e39764",
          500: "#da7635", //main
          600: "#cf6a26",
          700: "#ac5820",
          800: "#8a4619",
          900: "#673513",
        },
        flame: {
          50: "#fdf1ed",
          100: "#f8d4c9",
          200: "#f6c6b6",
          300: "#f2aa91",
          400: "#ee8d6d",
          500: "#ea7148",
          600: "#e24e1b", // main
          700: "#c94418",
          800: "#a43813",
          900: "#802b0f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
