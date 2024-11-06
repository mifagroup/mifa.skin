"use client";
import { Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { MutableRefObject } from "react";

const Hero = ({
  sectionRef,
}: {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  const theme = useTheme();

  return (
    <div
      id="heroSection"
      ref={sectionRef}
      className="bg-hero-background-image md:bg-center bg-right-bottom md:bg-cover sm:bg-[900px,600px] bg-no-repeat md:mt-[-79px] mt-[-200px] flex flex-col lg:pt-[260px] md:pt-[120px] pt-[150px]"
    >
      <div
        className={`lg:h-[1089px] md:h-[900px] h-[700px] w-full absolute top-0 z-30 ${
          theme.palette.mode === "light"
            ? "bg-hero-linear-gradient-light"
            : "bg-hero-linear-gradient"
        }`}
      ></div>
      <div className="container flex lg:flex-row flex-col justify-end items-center">
        <Image
          src={"/hercules.png"}
          alt="image"
          width={960}
          height={960}
          className="lg:h-[960px] lg:w-[960px] w-[420px] md:h-[420px] h-[375px] lg:absolute top-[80px] right-0 lg:order-1 order-2"
        />

        <div className="flex justify-end max-w-[560px] flex-col lg:gap-y-10 gap-y-5 relative z-50 lg:order-2 order-1 md:px-0 px-10">
          <div>
            <Typography
              sx={(theme) => ({
                fontWeight: "bold",
                color: theme.palette.common.white,
                textAlign: "justify",
                fontSize: {
                  xl: "96px",
                  lg: "70px",
                  md: "50px",
                  xs: "48px",
                },
                paddingTop: "100px",
              })}
            >
              از ایده تا پدیده
            </Typography>
            <Typography
              sx={(theme) => ({
                fontSize: {
                  md: "28px",
                  xs: "14px",
                },

                fontWeight: {
                  lg: "100",
                  xs: "300",
                },
                color: theme.palette.common.white,
                textAlign: "justify",
              })}
            >
              اینجا نقطه آغاز ماست… <br />
              جایی که ایده‌ها رنگ می‌گیرند و بودن ما آغاز می‌شود…
            </Typography>
          </div>
          <div
            className="flex items-center lg:justify-between justify-end
           z-10 md:gap-x-5 gap-x-0"
          >
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

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "0%",
                  height: "100%",
                  backgroundColor: theme.palette.secondary.main,
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
                  color: "#ffffff",
                  transform: "translateX(35%)",
                },
                span: {
                  transform: "translateX(0%)",
                  transition: "transform 0.3s ease",
                },
                "&:hover img": {
                  visibility: "hidden",
                },
              })}
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

            {/* "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100%",
                height: "100%",
                backgroundColor: "#ffffff",

                transform: "translate(-50%, -50%) scale(0)",
                transition: "transform 0.4s ease-in-out",
              },

              "&:hover::before": {
                transform: "translate(-50%, -50%) scale(1)",
              }, */}
          </div>
        </div>
      </div>
      <Image
        src={"/mifa-slide-roban.png"}
        alt=""
        width={1440}
        height={120}
        className="w-[100%] lg:mt-[270px] mt-[-40px] z-40"
      />
    </div>
  );
};

export default Hero;
