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
    <div className="pb-[370px] container flex flex-col gap-y-[140px]">
      <div className="flex justify-between items-center">
        <Typography
          sx={(theme) => ({
            color: theme.palette.common.white,
            fontSize: "40px",
            fontWeight: "bold",
          })}
        >
          خدماتی که میفا ارائه میدهد
        </Typography>
        <Image
          src={"/best-projects-title-line.png"}
          alt=""
          width={800}
          height={39}
          className="h-[39px] rotate-180"
        />
      </div>
      <div className="grid grid-cols-4 items-center justify-between gap-x-[40px]">
        {data?.map((item , index) => (
          <div key={index} className="border w-full bg-service-item-gradient p-[18px] h-full">
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
                fontSize: "28px",
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
                fontSize: "12px",
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
