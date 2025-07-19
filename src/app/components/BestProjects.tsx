"use client";
import { Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const BestProjects = () => {
  const swiperRef = useRef<SwiperType>();

  const theme = useTheme();

  return (
    <div className="min-h-screen flex items-center justify-center lg:px-0 px-2">
      <div className="flex container flex-col lg:gap-y-16 gap-y-7">
        <div className="flex justify-between items-center gap-x-4">
          <Image
            src={
              theme.palette.mode === "dark" ? "/star.png" : "/star-light.png"
            }
            alt="star"
            height={39}
            width={39}
            className="lg:h-[39px] lg:w-[39px] h-[25px] w-[25px]"
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
                lg: "700",
                md: "400",
                xs: "300",
              },
            })}
          >
            برترین آثار آژانس میفا
          </Typography>
        </div>
        <div className="relative">
          <div
            className="absolute top-[140px] right-[-70px] cursor-pointer lg:block hidden"
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
            />
          </div>
          <div
            className="absolute top-[140px] left-[-70px] cursor-pointer lg:block hidden"
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
              className="rotate-180"
            />
          </div>
          <Swiper
            modules={[Pagination]}
            // breakpoints={{
            //   "640": {
            //     slidesPerView: 1,
            //     spaceBetween: 20,
            //   },
            // }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
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
            className="best-projects-slider relative"
          >
            {[...Array(9)]?.map((item, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="flex flex-col lg:gap-y-6 gap-y-3">
                  <div className="relative">
                    <div className="w-full h-full absolute bg-best-project-item"></div>
                    <div className="px-[18px] pt-2.5 pb-4 border relative z-10 group cursor-pointer">
                      <div className="bg-[#121B3E] absolute z-10 left-[18px] right-[18px] bottom-4 top-2.5 opacity-30 group-hover:opacity-0 transition-all duration-200"></div>
                      <Image
                        src={"/project-sample.png"}
                        alt=""
                        width={299}
                        height={240}
                        className="mx-auto w-full grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
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
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                        fontSize: {
                          xs: "16px",
                          lg: "20px",
                        },
                        fontWeight: {
                          xs: "300",
                          md: "500",
                        },
                      })}
                    >
                      داری چوب
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestProjects;
