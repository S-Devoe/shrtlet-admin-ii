import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["var(--font-serif)"],
      sans: ["var(--font-sans)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)", // #16133D
        orange: "rgb(var(--color-orange) / <alpha-value>)" /* #FF5626 */,
        red: "rgb(var(--color-red) / <alpha-value>)" /* #FF595E */,
        jasmine: "rgb(var(--color-jasmine) / <alpha-value>)" /* #F3CB2B */,
        brun: "rgb(var(--color-brun) / <alpha-value>)" /* #005A1D */,
        lilac: "rgb(var(--color-lilac) / <alpha-value>)" /* #EEEAF9 */,
        nude: "rgb(var(--color-nude) / <alpha-value>)" /* #EEEED8 */,
        baby: "rgb(var(--color-baby) / <alpha-value>)" /* #FFDEE1 */,
        lime: "rgb(var(--color-lime) / <alpha-value>)" /* #E0FFA9 */,
        mint: "rgb(var(--color-mint) / <alpha-value>)" /* #D2FDFF */,
        blue: "rgb(var(--color-blue) / <alpha-value>)" /* #97CBFF */,
        gray: "rgb(var(--color-gray) / <alpha-value>)" /* #0E1004 */,
        black: "rgb(var(--color-black) / <alpha-value>)" /* #1C1F22 */,
        white: "rgb(var(--color-white) / <alpha-value>)" /* #FFFFFF */,
        "primary-darker":
          "rgb(var(--color-primary-darker) / <alpha-value>)" /* #0B091F */,
        "primary-lighter":
          "rgb(var(--color-primary-lighter) / <alpha-value>)" /* #322B8C */,
        "orange-dark":
          "rgb(var(--color-orange-dark) / <alpha-value>)" /* #F23602 */,
        "orange-light":
          "rgb(var(--color-orange-light) / <alpha-value>)" /* #FFEFEB */,
        "gray-seven":
          "rgb(var(--color-gray-seven) / <alpha-value>)" /* #D3DCE6 */,
        "gray-two": "rgb(var(--color-gray-two) / <alpha-value>)" /* #25292D */,
        "gray-three":
          "rgb(var(--color-gray-three) / <alpha-value>)" /* #444854 */,
        "gray-six": "rgb(var(--color-gray-six) / <alpha-value>)" /* #B9BCC8 */,
        "gray-five":
          "rgb(var(--color-gray-five) / <alpha-value>)" /* #6E717C */,
        "black-six":
          "rgb(var(--color-black-six) / <alpha-value>)" /* #060606; */,
        "gray-seven-five":
          "rgb(var(--color-gray-seven-five) / <alpha-value>)" /* #757D8A*/,
        "gray-ten": "rgb(var(--color-gray-ten) / <alpha-value>)" /* #eff2f7 */,
        "black-two-three":
          "rgb(var(--color-black-two-three) / <alpha-value>)" /* ##231F20 */,
        "brun-light":
          "rgb(var(--color-brun-light) / <alpha-value>)" /* #008F2D */,
        "jasmine-fainter":
          "rgb(var(--color-jasmine-fainter) / <alpha-value>)" /* #FEFAEC */,
        "brun-primary-fainter":
          "rgb(var(--color-brun-primary-fainter) / <alpha-value>)" /* #E1E0F6 */,
        "brun-fainter":
          "rgb(var(--color-brun-fainter) / <alpha-value>)" /* #D6FFE2 */,
        "gray-black":
          "rgb(var(--color-gray-black) / <alpha-value>)" /* #08080C */,
        "jasmine-dark":
          "rgb(var(--color-jasmine-dark) / <alpha-value>)" /* #E7BC0D */,
        "red-dark": "rgb(var(--color-red-dark) / <alpha-value>)" /* #FF1F26 */,
        "red-fainter":
          "rgb(var(--color-red-fainter) / <alpha-value>)" /* #FFEBEB */,
        "gray-eleven":
          "rgb(var(--color-gray-eleven) / <alpha-value>)" /* #F9FAFC */,
        "gray-nine":
          "rgb(var(--color-gray-nine) / <alpha-value>)" /* #E5E9F2 */,
        "gray-four":
          "rgb(var(--color-gray-four) / <alpha-value>)" /* #575A65 */,
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
