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
        "bottom-cloud":
          "linear-gradient(0deg, #141E4560 0%, #141E45 100%),url('/body-bottom-cloud.png')",
        "bottom-cloud-light":
          "linear-gradient(0deg, #ffffff60 0%, #ffffff 100%),url('/body-bottom-cloud.png')",
        "hero-linear-gradient":
          "linear-gradient(0deg, #141E45 10%, #141E4510 100%)",
        "hero-linear-gradient-light":
          "linear-gradient(180deg, #ffffff00 30%,#ffffff 100%)",
        "about-linear-gradient":
          "linear-gradient(to bottom, #141E4501 35%,#141E45 75%)",
        "about-linear-gradient-res":
          "linear-gradient(0deg, #141E45 15%,transparent,transparent,#141E4500 100%)",
        "about-linear-gradient-res-2":
          "linear-gradient(0deg, #141E45 15%,transparent,transparent,#141E4500 100%)",
        "about-linear-gradient-light":
          "linear-gradient(to bottom, #ffffff10 35%,#ffffff 75%)",
        "about-linear-gradient-res-light":
          "linear-gradient(0deg, #ffffff 15%,transparent,transparent,#ffffff00 100%)",
        "about-linear-gradient-res-2-light":
          "linear-gradient(0deg, #ffffff 15%,transparent,transparent,#ffffff00 100%)",
        "best-project-item":
          "linear-gradient(140deg, #ffffff30 0%, #ffffff10 100%)",
        "service-item-gradient":
          "linear-gradient(140deg, #ffffff15 0%, #ffffff02 100%)",
        "our-beginning-cloud": "url('/ourBeginningCloud.png')",
        "our-beginning-cloud-light":
          "linear-gradient(0deg, #ffffff00 10%, transparent 80%)",
        "fist-inner-gradient":
          "linear-gradient(0deg, #141E45 10%, #141E4501 100%)",
        "fist-inner-gradient-res":
          "linear-gradient(0deg, #141E45 0%,transparent, #141E4501 100%)",
        "fist-inner-gradient-light":
          "linear-gradient(0deg, #ffffff 10%, #ffffff01 100%)",
        "fist-inner-gradient-res-light":
          "linear-gradient(0deg, #ffffff 0%,transparent, #ffffff01 100%)",
        "input-background":
          "linear-gradient(140deg, #ffffff15 0%, #ffffff02 100%)",
        "request-background-linear":
          "linear-gradient(0deg, #141E45 0%, #141E45 01%,transparent 50%,transparent 100%)",
        "request-background-linear-light":
          "linear-gradient(0deg, #ffffff 0%, #ffffff 01%,transparent 50%,transparent 100%)",
        "request-form-background-linear":
          "linear-gradient(0deg, #141E45 10%, #141E45 10%, #141E4580 80%, transparent 100%)",
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
