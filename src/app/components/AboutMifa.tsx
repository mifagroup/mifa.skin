"use client";
import { Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { MutableRefObject } from "react";

const AboutMifa = ({
  sectionRef,
}: {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  const theme = useTheme();

  return (
    <div
      id="aboutSection"
      ref={sectionRef}
      className="bg-about-mifa 2xl:bg-cover lg:bg-bottom bg-[0px_150px] bg-no-repeat lg:h-[950px] md:h-[620px] h-[700px] flex justify-between items-center relative lg:pt-0 md:pt-[190px] pt-[100px]"
    >
      <div
        className={`lg:h-[950px] md:h-[750px] h-[700px] w-full absolute top-0 z-30 ${
          theme.palette.mode === "dark"
            ? "lg:bg-about-linear-gradient md:bg-about-linear-gradient-res bg-about-linear-gradient-res-2"
            : "lg:bg-about-linear-gradient-light md:bg-about-linear-gradient-res-light bg-about-linear-gradient-res-2-light"
        }`}
      ></div>
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="flex flex-col lg:gap-y-8 gap-y-2 z-50 max-w-[750px] lg:pt-16 lg:px-0 px-2">
            <div className="flex justify-between items-center gap-x-4">
              <Image src={"/star.png"} alt="star" height={39} width={39} />
              <div className="h-[1px] flex-1 bg-white opacity-50"></div>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: {
                    lg: "40px",
                    md: "30px",
                    xs: "20px",
                  },
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                })}
              >
                دنیای دیجیتال
              </Typography>
            </div>
            <div className="flex flex-col lg:gap-y-5 gap-y-3">
              <Typography
                sx={(theme) => ({
                  fontSize: {
                    lg: "40px",
                    md: "30px",
                    xs: "16px",
                  },
                  color: theme.palette.common.white,
                  fontWeight: "bold",
                })}
              >
                آژانس دیجیتال مـارکتیـنگ میفا، از ایده تا پدیده
              </Typography>
              <Typography
                sx={(theme) => ({
                  fontSize: {
                    lg: "20px",
                    md: "16px",
                    xs: "10px",
                  },
                  fontWeight: "400",
                  color: theme.palette.common.white,
                  textAlign: "justify",
                })}
              >
                دنیای دیجیتال حالا دیگــر تبـدیل به جزیی جدایی نا‌پذیر از
                زنــدگــی همـــه مـــا شــده است. شـــاید بـــه جرات بتـــوان
                گـفت، بخشی از معنای زندگی همه ما در دنیــای دیـجیـتال تعـریف
                می‌شود و فـلسفه وجــودی آن، چیزی جدا از واژه “زیستـن” و
                تجــربه‌هــای زیــســته ما نیست. حـــالا دیگر نمی‌توان
                مصدر“بودن” را بــدون دنــیای دیجیــتال تعریف کــرد. دنیـای
                شــگـرفت و عمیق و پر از ماجراجویی‌های عجیب…
              </Typography>
            </div>
            <div className="flex items-center lg:justify-start justify-end lg:gap-x-[170px] z-10 lg:pt-5 pt-2">
              <Button
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: {
                    lg: "20px",
                    md: "14px",
                    sm: "10px",
                  },
                  fontWeight: {
                    md: "500",
                    xs: "300",
                  },
                  columnGap: "5px",
                  zIndex: 1, // Ensures button text appears on top
                  transition: "0.5s ease",
                  borderRadius: 0,
                  overflow: "hidden",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },

                  "&:hover span": {
                    color: "#ffffff",
                    transform: "translateX(35%)",
                  },
                  span: {
                    transform: "translateX(0%)",
                    transition: "transform 0.5s ease",
                  },
                  ".img-container": {
                    transform: "translateX(0%)",
                    scale: "1",
                    transition: "transform 0.8s ease,scale 0.5s ease",
                  },
                  "&:hover .img-container": {
                    transform: "translateX(-150px)",
                    scale: 5,
                  },
                })}
              >
                <div
                  style={{ position: "relative", zIndex: 2 }}
                  className="img-container"
                >
                  <Image
                    src={
                      theme.palette.mode === "light"
                        ? "/councilArrow-light.svg"
                        : "/councilArrow.svg"
                    }
                    alt="arrow"
                    width={67}
                    height={24}
                    className="h-[24px] lg:w-[67px] w-[40px]"
                  />
                </div>

                <span style={{ position: "relative", zIndex: 2 }}>
                  مشاوره رایگان
                </span>
              </Button>
              <Button
                sx={(theme) => ({
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: 0,
                  width: {
                    lg: "166px",
                    md: "100px",
                    xs: "80px",
                  },
                  height: {
                    lg: "41px",
                    md: "35px",
                    xs: "30px",
                  },
                  fontSize: {
                    lg: "20px",
                    md: "14px",
                    xs: "10px",
                  },
                  fontWeight: {
                    md: "500",
                    xs: "400",
                  },
                  color:
                    theme.palette.mode === "light"
                      ? "#ffffff"
                      : theme.palette.common.white,
                  position: "relative",
                  overflow: "hidden",
                  zIndex: 1, // Ensures button text appears on top

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0%",
                    height: "100%",
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? "#ffffff"
                        : theme.palette.common.white,
                    transition:
                      "width 0.4s ease, border-radius 0.4s ease, opacity 0.4s ease",
                    zIndex: 0, // Places the overlay behind the text
                    borderRadius: "50% / 50%", // Start with curves on both top and bottom
                    opacity: 0, // Start with 0 opacity
                  },

                  "&:hover::before": {
                    width: "100%",
                    borderRadius: "0", // Straighten out edges as it expands
                    opacity: 1, // Fade in to full opacity on hover
                  },

                  "&:hover span": {
                    color: theme.palette.secondary.main,
                  },
                })}
              >
                <span style={{ position: "relative", zIndex: 2 }}>
                  در باره میفا
                </span>
              </Button>
            </div>
          </div>
          <Image
            src={"/hercules-ai.png"}
            alt="image"
            width={418}
            height={695}
            className="lg:!h-[695px] lg:!w-[418px] !h-[400px] !w-[260px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMifa;
