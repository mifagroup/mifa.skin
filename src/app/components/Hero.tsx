"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero-background-image bg-center bg-cover mt-[-79px] flex flex-col pt-[260px]">
      <div className="h-[1089px] w-full absolute top-0 z-30 bg-hero-linear-gradient"></div>
      <div className="container flex justify-end items-center">
        <Image
          src={"/hercules.png"}
          alt="image"
          width={960}
          height={960}
          className="h-[960px] w-[960px] absolute top-[80px] right-0"
        />

        <div className="flex justify-end max-w-[560px] flex-col gap-y-10 relative z-50">
          <div>
            <Typography
              sx={(theme) => ({
                fontSize: "96px",
                fontWeight: "bold",
                color: theme.palette.common.white,
              })}
            >
              از ایده تا پدیده
            </Typography>
            <Typography
              sx={(theme) => ({
                fontSize: "28px",
                fontWeight: "100",
                color: theme.palette.common.white,
                textAlign: "justify",
              })}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنـعـت چاپ و بـا
              استـفـاده از طراحـان گرافیـک است
            </Typography>
          </div>
          <div className="flex items-center justify-between z-10">
            <Button
              sx={(theme) => ({
                color: theme.palette.common.white,
                fontSize: "20px",
                fontWeight: "500",
              })}
            >
              <Image
                src={"/councilArrow.svg"}
                alt="arrow"
                width={67}
                height={24}
              />
              مشاوره رایگان
            </Button>
            <Button
              sx={(theme) => ({
                backgroundColor: theme.palette.secondary.main,
                borderRadius: 0,
                width: "166px",
                height: "41px",
                fontSize: "20px",
                fontWeight: "500",
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
        className="w-[100%] mt-[300px] z-40"
      />
    </div>
  );
};

export default Hero;
