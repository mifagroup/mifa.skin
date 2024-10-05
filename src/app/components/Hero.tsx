"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero-background-image bg-center md:bg-cover sm:bg-[900px,600px] bg-no-repeat md:mt-[-79px] mt-[-200px] flex flex-col lg:pt-[260px] md:pt-[120px] pt-[150px]">
      <div className="lg:h-[1089px] md:h-[900px] h-[700px] w-full absolute top-0 z-30 bg-hero-linear-gradient"></div>
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
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنـعـت چاپ و بـا
              استـفـاده از طراحـان گرافیـک است
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
              })}
            >
              <Image
                src={"/councilArrow.svg"}
                alt="arrow"
                width={67}
                height={24}
                className="h-[24px] lg:w-[67px] w-[40px]"
              />
              مشاوره رایگان
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
                color: theme.palette.common.white,
              })}
            >
              در باره میفا
            </Button>
          </div>
        </div>
      </div>
      <Image
        src={"/mifa-slide-roban.png"}
        alt=""
        width={1440}
        height={120}
        className="w-[100%] lg:mt-[280px] mt-[-40px] z-40"
      />
    </div>
  );
};

export default Hero;
