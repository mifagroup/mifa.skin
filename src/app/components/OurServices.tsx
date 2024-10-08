"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: "01",
    title: "طراحی گرافیک",
    desc: "بـهـتــریـن راه مـانـدن در ذهـن مـخـاطـب، داشـتـن طـراحـی گـرافـیـکی جـذاب اسـت. آژانـس مـیفـا، ارائـه دهنــده انـواع خـدمات گـرافیکی است. تنها کافی است با مشاورین مـا در میفا تماس بگیرید و مشـاوره رایـگـان متناسب با کـسـب و کار خود بـگـیــریـد. خـدمـات طـراحـی گـرافـیـکـی مـیـفـا در زمـیـنـه های مـخـتـلـف طراحی لوگو، طراحی بروشور، طراحی کاتالوگ، عکاسی تبلیغاتی و… می باشد.",
  },
  {
    id: "02",
    title: " سوشال مدیا",
    desc: "سوشـال مـدیا ، فـرصتی مناسب برای برقراری ارتبـاط موثر و راحـت با مشتـریان اسـت و بـرای گسـتـرش کسـب و کار در فـضـای دیجیتال، ابزار کاربردی است. از طریق این فضـا، در کمترین زمان می توانیـد با مشتری خود ارتباط برقرار کنید. ",
  },
  {
    id: "03",
    title: " طراحی سایت",
    desc: "از دیگر خدمات آژانـس دیجیـتال مارکتـینگ میفـا، طـراحـی سـایـت بـرای انـواع کسـب و کـار‌‌هـا اسـت. وب سـایـت شـما مـهمـترین ویترین برای کسب و کار شما اسـت. طراحی وب سایت حرفه ای لازمه ورود شما به رقابت در دنیای دیجیتال است. از ویژگی هـای طراحی سایـت در میفا، طـراحی اصولی و چشم نواز با امکانات کامل و کاربردی است.",
  },
  {
    id: "04",
    title: "سئو و بهینه سازی",
    desc: "سئو و بهینه سـازی سایت، باعث افـزایش بازدیـد و مـخاطبان سایـت می‌شـود کـه می‌تـوانـد بسـتـه بـه اهـداف گـونـاگـونـی همچون فروش، ارائه خدمات، برندسازی و… بـاشد. خدمـات سـئـو سایـت به مجموعه فـعالیت هـایی گـفـتـه می‌شـود کـه باعـث افزایش رتبه و جایـگاه سایت در نتایج گوگـل می‌شود، آژانس دیجیتـال مارکـتیـنگ میفـا ارائـه دهــده خدمـات سئـو و مشاوره سئو می‌باشد.",
  },
];

const OurServices = () => {
  return (
    <div className="lg:pb-[370px] pb-[100px] container flex flex-col lg:gap-y-[140px] gap-y-[100px] lg:px-0 px-2">
      <div className="flex justify-between items-center gap-x-4">
        <Typography
          sx={(theme) => ({
            color: theme.palette.common.white,
            fontSize: {
              lg: "40px",
              sm: "20px",
            },
            fontWeight: {
              lg: "700",
              md: "400",
              xs: "300",
            },
          })}
        >
          خدماتی که میفا ارائه میدهد
        </Typography>
        <div className="h-[1px] flex-1 bg-white opacity-50"></div>
        <Image
          src={"/star.png"}
          alt="star"
          height={39}
          width={39}
          className="lg:h-[39px] lg:w-[39px] h-[25px] w-[25px]"
        />
      </div>
      <div className="grid grid-cols-4 items-center justify-between lg:gap-x-[40px] md:gap-x-[20px] md:gap-y-[80px] gap-x-5 gap-y-[70px]">
        {data?.map((item, index) => (
          <div
            key={index}
            className="border w-full bg-service-item-gradient lg:col-span-1 col-span-2 p-[18px] h-full"
          >
            <Image
              src={`/${item.id}.png`}
              alt="image"
              width={
                item.id === "01"
                  ? 73
                  : item.id === "02"
                  ? 98.5
                  : item.id === "03"
                  ? 115
                  : 111
              }
              height={93}
              className={`${
                item.id === "01"
                  ? 73
                  : item.id === "02"
                  ? 98.5
                  : item.id === "03"
                  ? 115
                  : 111
              } mt-[-70px]`}
            />
            <Typography
              sx={(theme) => ({
                color: theme.palette.common.white,
                fontSize: {
                  lg: "20px",
                  sm: "13px",
                },
                fontWeight: "bold",
                width: "100%",
                borderBottom: `1px solid ${theme.palette.common.white}`,
                paddingBottom: "8px",
                marginBottom: "10px",
                textAlign: "left",
              })}
            >
              {item.title}
            </Typography>
            <Typography
              sx={(theme) => ({
                fontSize: {
                  md: "12px",
                  xs: "8px",
                },
                color: theme.palette.common.white,
                fontWeight: "500",
                textAlign: "justify",
              })}
            >
              {item.desc}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
