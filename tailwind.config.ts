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
        "pewter-blue": " #90A3BF",
        "dark-electric-blue": "#596780",
        "beau-blue": " #C3D4E9",
        "dark-gunmetal": "#1A202C",
        "royal-blue": "#3563E9",
        "carmine-pink": "#ED3F3F",
        "sonic-silver": "#787878",
        "chinese-black": "#131313",
        "philip-silver": "#b4b4b4",
        cultured: "#F6F7F9",
      },
    },
  },
  plugins: [],
};
export default config;
