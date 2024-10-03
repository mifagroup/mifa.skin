"use client";
import Link from "next/link";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
// Import Swiper styles
import "swiper/css";
const connectionItems = [
  {
    id: "1",
    title: "تلفن",
    value: "021-123456789",
    icon: "/phone-red-icon.svg",
  },
  {
    id: "2",
    title: "شماره موبایل",
    value: "021-123456789",
    icon: "/phone-red-icon.svg",
  },
  {
    id: "3",
    title: "ایمیل",
    value: "info@mifaagancy.org",
    icon: "/email-icon.svg",
  },
];

const quickActions = [
  {
    id: "1",
    title: "لورم ایپسوم",
  },
  {
    id: "2",
    title: "لورم ایپسوم",
  },
  {
    id: "3",
    title: "لورم ایپسوم",
  },
  {
    id: "4",
    title: "لورم ایپسوم",
  },
  {
    id: "5",
    title: "لورم ایپسوم",
  },
];

const importantLinks = [
  {
    id: "1",
    title: "محصولات",
  },
  {
    id: "2",
    title: "مقالات آموزشی",
  },
  {
    id: "3",
    title: "برترین برندها ",
  },
];

const Footer = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="bg-bottom-cloud bg-no-repeat bg-bottom bg-[100%,1920px]">
      <div className="container mb-[300px]">
        <div className="flex flex-col gap-y-14">
          <div className="flex justify-between items-center gap-x-2">
            <Image src={"/star.png"} alt="star" height={39} width={39} />
            <div className="h-[1px] flex-1 bg-white opacity-50"></div>
            <Typography
              sx={(theme) => ({
                color: theme.palette.common.white,
                fontSize: "40px",
                fontWeight: "bold",
              })}
            >
              مقالات آموزشی
            </Typography>
          </div>
          <div className="relative">
            <div className="bg-[#162144] absolute h-full w-full border border-[#ffffff10] top-12"></div>
            <div className="relative">
              <div
                className="absolute top-[140px] right-5 cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <Image
                  src={"/bestProjectArrow.png"}
                  alt="arrow"
                  width={50}
                  height={50}
                />
              </div>
              <div
                className="absolute top-[140px] left-5 cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <Image
                  src={"/bestProjectArrow.png"}
                  alt="arrow"
                  width={50}
                  height={50}
                  className="rotate-180"
                />
              </div>
              <Swiper
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
                spaceBetween={50}
                className="relative w-[85%]"
              >
                {[...Array(9)]?.map((item ,index) => (
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
                            fontSize: "20px",
                            fontWeight: "800",
                            color: theme.palette.common.white,
                          })}
                        >
                          لورم ایپسوم
                        </Typography>
                        <Typography
                          sx={(theme) => ({
                            fontSize: "13px",
                            color: theme.palette.common.white,
                          })}
                        >
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است.
                        </Typography>
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
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[150px]">
        <div className="container">
          <div className="grid grid-cols-7 gap-x-[70px]">
            <div className="flex flex-col col-span-3 gap-y-6">
              <div className="flex flex-col gap-y-3">
                <div className="flex items-center gap-x-3">
                  <Image
                    src={"/location-icon.svg"}
                    alt="icon-location"
                    width={20}
                    height={20}
                  />
                  <Typography
                    sx={(theme) => ({
                      color: theme.palette.common.white,
                      fontSize: "24px",
                      fontWeight: "800",
                    })}
                  >
                    راه‌های ارتباطی بـا آژانس دیجیتال مارکتینگ میفا
                  </Typography>
                </div>
                <Typography
                  sx={(theme) => ({
                    fontSize: "20px",
                    color: theme.palette.common.white,
                    maxWidth: "500px",
                    paddingRight: "30px",
                  })}
                >
                  نـشـانـی:لـورم ایپـسـوم مــتــن ســاخـتـگـی با تــولیـــد
                  سـادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                </Typography>
              </div>
              <div className="flex flex-col gap-y-4">
                {connectionItems?.map((item , index) => (
                  <div key={index} className="flex items-center gap-x-3">
                    <Image src={item.icon} alt="icon" width={20} height={20} />
                    <div className="flex items-center gap-x-2">
                      <Typography
                        sx={(theme) => ({
                          color: theme.palette.common.white,
                          fontSize: "20px",
                          fontWeight: "800",
                        })}
                      >
                        {item.title}:
                      </Typography>
                      <Typography
                        sx={(theme) => ({
                          color: theme.palette.common.white,
                          fontSize: "20px",
                        })}
                      >
                        {item.value}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col col-span-1 gap-y-10">
              <Typography
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: "20px",
                  fontWeight: "800",
                })}
              >
                دسترسی سریع
              </Typography>
              <div className="flex flex-col gap-y-3">
                {quickActions?.map((item , index) => (
                  <div key={index} className="flex items-center gap-x-2">
                    <Image
                      src={"/filled-star-icon.svg"}
                      alt="icon"
                      width={18}
                      height={18}
                    />
                    <Typography
                      sx={(theme) => ({
                        fontSize: "20px",
                        color: theme.palette.common.white,
                        cursor: "pointer",
                      })}
                    >
                      {item.title}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col col-span-1 gap-y-10">
              <Typography
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: "20px",
                  fontWeight: "800",
                })}
              >
                لینک های مهم
              </Typography>
              <div className="flex flex-col gap-y-3">
                {importantLinks?.map((item , index) => (
                  <div key={index} className="flex items-center gap-x-2">
                    <Image
                      src={"/filled-star-icon.svg"}
                      alt="icon"
                      width={18}
                      height={18}
                    />
                    <Typography
                      sx={(theme) => ({
                        fontSize: "20px",
                        color: theme.palette.common.white,
                        cursor: "pointer",
                      })}
                    >
                      {item.title}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex col-span-2 flex-col gap-y-10">
              <Typography
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: "20px",
                  fontWeight: "800",
                })}
              >
                شبکه اجتماعی
              </Typography>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: "18px",
                  textAlign: "justify",
                  maxWidth: "314px",
                })}
              >
                لورم ایپسوم مـتن ساختگی با تــولید سادگی نامفـهـوم از صنـعـت
                چـاپ، و با استـفــاده از طــراحــان گــرافــیـک است، چاپگرها و
                متون بلکه روزنامه و مـجله در ستون و سطرآنچنان که لازم است.
              </Typography>
              <div className="flex items-center justify-center gap-x-3">
                <Link href={""}>
                  <Image
                    src={"/instagram.svg"}
                    alt="instagram"
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px]"
                  />
                </Link>
                <Link href={""}>
                  <Image
                    src={"/linkedin.svg"}
                    alt="linkedin"
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px]"
                  />
                </Link>
                <Link href={""}>
                  <Image
                    src={"/twitter.svg"}
                    alt="twitter"
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px]"
                  />
                </Link>
                <Link href={""}>
                  <Image
                    src={"/facebook.svg"}
                    alt="facebook"
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
