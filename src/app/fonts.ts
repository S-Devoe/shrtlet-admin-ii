import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

export const serif = localFont({
  display: "swap",
  src: "./fonts/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf",
  weight: "variable",
  variable: "--font-serif",
});

export const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
