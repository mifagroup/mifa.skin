"use client";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: "04",
    title: "سئو و بهینه سازی",
    desc: "سئو و بهینه سـازی سایت، باعث افـزایش بازدیـد و مـخاطبان سایـت می‌شـود کـه می‌تـوانـد بسـتـه بـه اهـداف گـونـاگـونـی همچون فروش، ارائه خدمات، برندسازی و… بـاشد. خدمـات سـئـو سایـت به مجموعه فـعالیت هـایی گـفـتـه می‌شـود کـه باعـث افزایش رتبه و جایـگاه سایت در نتایج گوگـل می‌شود، آژانس دیجیتـال مارکـتیـنگ میفـا ارائـه دهــده خدمـات سئـو و مشاوره سئو می‌باشد.",
  },
  {
    id: "03",
    title: " طراحی سایت",
    desc: "از دیگر خدمات آژانـس دیجیـتال مارکتـینگ میفـا، طـراحـی سـایـت بـرای انـواع کسـب و کـار‌‌هـا اسـت. وب سـایـت شـما مـهمـترین ویترین برای کسب و کار شما اسـت. طراحی وب سایت حرفه ای لازمه ورود شما به رقابت در دنیای دیجیتال است. از ویژگی هـای طراحی سایـت در میفا، طـراحی اصولی و چشم نواز با امکانات کامل و کاربردی است.",
  },
  {
    id: "02",
    title: " سوشال مدیا",
    desc: "سوشـال مـدیا ، فـرصتی مناسب برای برقراری ارتبـاط موثر و راحـت با مشتـریان اسـت و بـرای گسـتـرش کسـب و کار در فـضـای دیجیتال، ابزار کاربردی است. از طریق این فضـا، در کمترین زمان می توانیـد با مشتری خود ارتباط برقرار کنید. ",
  },
  {
    id: "01",
    title: "طراحی گرافیک",
    desc: "بـهـتــریـن راه مـانـدن در ذهـن مـخـاطـب، داشـتـن طـراحـی گـرافـیـکی جـذاب اسـت. آژانـس مـیفـا، ارائـه دهنــده انـواع خـدمات گـرافیکی است. تنها کافی است با مشاورین مـا در میفا تماس بگیرید و مشـاوره رایـگـان متناسب با کـسـب و کار خود بـگـیــریـد. خـدمـات طـراحـی گـرافـیـکـی مـیـفـا در زمـیـنـه های مـخـتـلـف طراحی لوگو، طراحی بروشور، طراحی کاتالوگ، عکاسی تبلیغاتی و… می باشد.",
  },
];

const OurServices = () => {
  const theme = useTheme();

  return (
    <div className="lg:pb-[370px] pb-[100px] container flex flex-col lg:px-0 px-2">
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
        <div
          className={`h-[1px] flex-1 opacity-50 ${
            theme.palette.mode === "dark" ? "bg-white" : "bg-primary"
          }`}
        ></div>
        <Image
          src={theme.palette.mode === "dark" ? "/star.png" : "/star-light.png"}
          alt="star"
          height={39}
          width={39}
          className="lg:h-[39px] lg:w-[39px] h-[25px] w-[25px]"
        />
      </div>
      <div className="grid grid-cols-4 items-center justify-between lg:gap-x-[40px] md:gap-x-[20px] md:gap-y-[80px] gap-x-5 gap-y-[70px] lg:pt-[250px] pt-[100px] ">
        {data?.map((item, index) => (
          <Box
            sx={{
              height: "250px",
              width: "100%",
              transition: "0.4s ease",
              rowGap: "20px",
              position: "relative",
              "&::before": {
                content: '""',
                width: "30px",
                height: "30px",
                position: "absolute",
                right: "-10px",
                top: "-10px",
                borderRight: `2px solid red`,
                borderTop: `2px solid red`,
                filter: "blur(3px)",
                display: "none",
              },
              "&::after": {
                content: '""',
                width: "30px",
                height: "30px",
                position: "absolute",
                left: "-10px",
                bottom: "-10px",
                borderLeft: `2px solid red`,
                borderBottom: `2px solid red`,
                filter: "blur(3px)",
                display: "none",
              },
              "&:hover": {
                marginTop: "-200px",
                background:
                  theme.palette.mode === "dark" &&
                  `radial-gradient(circle, ${theme.palette.secondary.main}80 0%, transparent 90%,transparent 70%)`,
              },
              "&:hover::after": {
                display: "block",
              },
              "&:hover::before": {
                display: "block",
              },
              "&:hover button": {
                opacity: 1,
              },

              gridColumn: { xs: "span 2", lg: "span 1" },
              button: {
                opacity: 0,
                transition: "0.2s ease",
              },
            }}
          >
            <div className="border w-full bg-service-item-gradient shadow-md lg:col-span-1 col-span-2 p-[18px] h-full z-10 relative">
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
                } mt-[-70px] mr-auto`}
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
            <div className="w-full h-[25px]"></div>
            <Button
              sx={(theme) => ({
                color: theme.palette.common.white,
                width: "100%",
                border: `1px solid ${
                  theme.palette.mode === "light"
                    ? theme.palette.common.black
                    : theme.palette.common.white
                }`,
                paddingY: "10px",
                fontSize: {
                  lg: "30px",
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
                  border: `1px solid ${
                    theme.palette.mode === "light"
                      ? theme.palette.common.black
                      : theme.palette.secondary.main
                  }`,
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
                  className="lg:h-[34px] h-[24px] lg:w-[100px] w-[40px]"
                />
              </div>

              <span style={{ position: "relative", zIndex: 2 }}>
                اطلاعات بیشتر
              </span>
            </Button>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
