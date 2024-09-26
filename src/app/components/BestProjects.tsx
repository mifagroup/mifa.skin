"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
const BestProjects = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="py-[370px]">
      <div className="flex container flex-col gap-y-16">
        <div className="flex justify-between items-center">
          <Image
            src={"/best-projects-title-line.png"}
            alt=""
            width={920}
            height={39}
            className="h-[39px]"
          />
          <Typography
            sx={(theme) => ({
              color: theme.palette.common.white,
              fontSize: "40px",
              fontWeight: "bold",
            })}
          >
            برترین آثار آژانس میفا
          </Typography>
        </div>
        <div className="relative">
          <div
            className="absolute bg-red-200 top-[140px] right-[-50px]"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            hle
          </div>
          <Swiper
            pagination
            modules={[Pagination]}
            // breakpoints={{
            //   "640": {
            //     slidesPerView: 1,
            //     spaceBetween: 20,
            //   },
            // }}
            slidesPerView={3}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={30}
            className="best-projects-slider relative"
          >
            {[...Array(9)]?.map(() => (
              <SwiperSlide className="relative">
                <div className="flex flex-col gap-y-6">
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
                        color: theme.palette.common.white,
                        fontSize: "13px",
                        fontWeight: "500",
                        backgroundColor: theme.palette.secondary.main,
                        borderRadius: 0,
                        width: "94px",
                        height: "27px",
                      })}
                    >
                      <Image
                        src={"/councilArrow.svg"}
                        alt=""
                        width={40}
                        height={16}
                        className="h-[16px] w-[40px]"
                      />
                      بیشتر...
                    </Button>
                    <Typography
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                        fontSize: "20px",
                        fontWeight: "500",
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