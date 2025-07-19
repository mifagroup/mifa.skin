"use client";
import { Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
// Import Swiper styles
import "swiper/css";

const Blogs = () => {
  const swiperRef = useRef<SwiperType>();
  const theme = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-no-repeat bg-bottom bg-[100%,1920px] lg:px-0 px-2 ${
        theme.palette.mode === "dark"
          ? "bg-bottom-cloud"
          : "bg-bottom-cloud-light"
      }`}
    >
      <div className="container">
        <div className="flex flex-col gap-y-14">
          <div className="flex justify-between items-center gap-x-2">
            <Image
              src={
                theme.palette.mode === "dark" ? "/star.png" : "/star-light.png"
              }
              alt="star"
              height={39}
              width={39}
            />
            <div
              className={`h-[1px] flex-1 opacity-50 ${
                theme.palette.mode === "dark" ? "bg-white" : "bg-primary"
              }`}
            ></div>
            <Typography
              sx={(theme) => ({
                color: theme.palette.common.white,
                fontSize: {
                  lg: "40px",
                  md: "30px",
                  xs: "20px",
                },
                fontWeight: {
                  lg: "bold",
                  md: "medium",
                  xs: "300",
                },
              })}
            >
              مقالات آموزشی
            </Typography>
          </div>
          <div className="relative">
            <div
              className={`absolute md:h-full h-[90%] w-full border border-[#ffffff10] shadow-md top-12 ${
                theme.palette.mode === "dark" ? "bg-[#162144]" : "bg-white"
              }`}
            ></div>
            <div className="relative">
              <div
                className="absolute top-[140px] md:right-5 right-3 cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <Image
                  src={
                    theme.palette.mode === "dark"
                      ? "/bestProjectArrow.png"
                      : "/bestProjectArrow-light.png"
                  }
                  alt="arrow"
                  width={50}
                  height={50}
                  className="lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
                />
              </div>
              <div
                className="absolute top-[140px] md:left-5 left-3 cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <Image
                  src={
                    theme.palette.mode === "dark"
                      ? "/bestProjectArrow.png"
                      : "/bestProjectArrow-light.png"
                  }
                  alt="arrow"
                  width={50}
                  height={50}
                  className="rotate-180 lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
                />
              </div>
              <Swiper
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="relative md:w-[85%] w-[65%]"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    pagination: {
                      dynamicBullets: true,
                      dynamicMainBullets: 1,
                    },
                  },
                }}
              >
                {[...Array(9)]?.map((item, index) => (
                  <SwiperSlide key={index} className="relative">
                    <div className="flex flex-col gap-y-6">
                      <div className="relative">
                        <div className="relative z-10 group cursor-pointer">
                          <div className="bg-[#121B3E] absolute z-10 opacity-30 group-hover:opacity-0 transition-all duration-200"></div>
                          <Image
                            src={"/project-sample.png"}
                            alt=""
                            width={299}
                            height={240}
                            className="mx-auto w-full grayscale group-hover:grayscale-0"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <Typography
                          sx={(theme) => ({
                            fontSize: {
                              lg: "20px",
                              md: "16px",
                              xs: "12px",
                            },
                            fontWeight: "800",
                            color: theme.palette.common.white,
                          })}
                        >
                          لورم ایپسوم
                        </Typography>
                        <Typography
                          sx={(theme) => ({
                            fontSize: {
                              md: "13px",
                              xs: "10px",
                            },
                            color: theme.palette.common.white,
                          })}
                        >
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است.
                        </Typography>
                        <Button
                          sx={(theme) => ({
                            color:
                              theme.palette.mode === "light"
                                ? "#ffffff"
                                : theme.palette.common.white,
                            fontSize: "13px",
                            fontWeight: {
                              xs: "300",
                              md: "500",
                            },
                            backgroundColor: theme.palette.secondary.main,
                            borderRadius: 0,
                            width: "94px",
                            height: "27px",
                            zIndex: 1,

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
                              zIndex: 0,
                              borderRadius: "50% / 50%",
                              opacity: 0,
                            },

                            "&:hover::before": {
                              width: "100%",
                              borderRadius: "0",
                              opacity: 1,
                            },

                            "&:hover span": {
                              color: theme.palette.secondary.main,
                              transform: "translateX(50%)",
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
                            src={"/councilArrow.svg"}
                            alt=""
                            width={40}
                            height={16}
                            className="h-[16px] w-[40px]"
                          />
                          <span style={{ position: "relative", zIndex: 2 }}>
                            بیشتر...
                          </span>
                        </Button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
