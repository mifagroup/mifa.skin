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
        primary: "#141E45",
        secondary: "#AB1E37",
      },
      backgroundImage: {
        "hero-background-image": "url('/heroCloud.png')",
        noise: "url('/noise.png')",
        "about-mifa": "url('/aboutMifa.png')",
        "hero-linear-gradient":
          "linear-gradient(0deg, #141E45 10%, #141E4510 100%)",
        "about-linear-gradient":
          "linear-gradient(to bottom, #141E4501 35%,#141E45 75%)",
        "best-project-item":
          "linear-gradient(140deg, #ffffff30 0%, #ffffff10 100%)",
        "service-item-gradient":
          "linear-gradient(140deg, #ffffff15 0%, #ffffff02 100%)",
        "our-beginning-cloud": "url('/ourBeginningCloud.png')",
        "fist-inner-gradient":
          "linear-gradient(0deg, #141E45 10%, #141E4501 100%)",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1441px",
    },
  },

  plugins: [],
};
export default config;
