import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
          boxShadow:{
            '3xl' : '0 10px 50px 0px rgba(0,0,0,0.15)',
          },
      
          colors:{
            "primary":"#000000",
            "secondary":"#008DDA",
            "tertiary":"#0C359E"
          }
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
  plugins: [],
};
export default config;
