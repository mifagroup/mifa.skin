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
    value: "021-88460056 ",
    icon: "/phone-red-icon.svg",
  },
  {
    id: "2",
    title: "شماره موبایل",
    value: "09109281060 ",
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
    title: "خدمات سئو",
  },
  {
    id: "2",
    title: "طراحی سایت",
  },
  {
    id: "3",
    title: "تولید محتوا در اینستاگرام",
  },
  {
    id: "4",
    title: "طراحی لوگو",
  },
  {
    id: "5",
    title: "طراحی کاتالوگ",
  },
];

const importantLinks = [
  {
    id: "1",
    title: "درباره ما",
  },
  {
    id: "2",
    title: "نمونه کار",
  },
  {
    id: "3",
    title: "مقالات آموزشی",
  },
];

const Footer = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="bg-bottom-cloud bg-no-repeat bg-bottom bg-[100%,1920px] lg:px-0 px-2">
      <div className="container lg:mb-[300px] mb-[100px]">
        <div className="flex flex-col gap-y-14">
          <div className="flex justify-between items-center gap-x-2">
            <Image src={"/star.png"} alt="star" height={39} width={39} />
            <div className="h-[1px] flex-1 bg-white opacity-50"></div>
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
            <div className="bg-[#162144] absolute md:h-full h-[90%] w-full border border-[#ffffff10] top-12"></div>
            <div className="relative">
              <div
                className="absolute top-[140px] md:right-5 right-3 cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <Image
                  src={"/bestProjectArrow.png"}
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
                  src={"/bestProjectArrow.png"}
                  alt="arrow"
                  width={50}
                  height={50}
                  className="rotate-180 lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]"
                />
              </div>
              <Swiper
                // breakpoints={{
                //   "640": {
                //     slidesPerView: 1,
                //     spaceBetween: 20,
                //   },
                // }}
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
                {[...Array(9)]?.map(() => (
                  <SwiperSlide className="relative">
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
                            color: theme.palette.common.white,
                            fontSize: {
                              md: "13px",
                              xs: "10px",
                            },
                            fontWeight: {
                              md: "500",
                              xs: "300",
                            },
                            backgroundColor: theme.palette.secondary.main,
                            borderRadius: 0,
                            width: {
                              md: "94px",
                              xs: "80px",
                            },
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
      <div className="lg:pb-[150px] pb-[50px]">
        <div className="container">
          <div className="grid grid-cols-7 lg:gap-x-[70px] gap-y-[30px]">
            <div className="flex flex-col lg:col-span-3 col-span-7 gap-y-6">
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
                      fontSize: {
                        lg: "30px",
                        md: "20px",
                        xs: "16px",
                      },
                      fontWeight: {
                        lg: "800",
                        md: "600",
                        xs: "400",
                      },
                    })}
                  >
                    راه‌های ارتباطی بـا آژانس دیجیتال مارکتینگ میفا
                  </Typography>
                </div>
                <Typography
                  sx={(theme) => ({
                    fontSize: {
                      lg: "20px",
                      md: "16px",
                      xs: "12px",
                    },
                    color: theme.palette.common.white,
                    maxWidth: {
                      lg: "500px",
                      md: "100%",
                    },
                    paddingRight: {
                      lg: "30px",
                      md: "0px",
                    },
                  })}
                >
                  نـشـانـی: خیابان مطهری نرسیده به شریعتی – ساختمان سجاد- پلاک
                  15 – واحد 3
                </Typography>
              </div>
              <div className="flex flex-col gap-y-4">
                {connectionItems?.map((item) => (
                  <div className="flex items-center gap-x-3">
                    <Image src={item.icon} alt="icon" width={20} height={20} />
                    <div className="flex items-center gap-x-2">
                      <Typography
                        sx={(theme) => ({
                          color: theme.palette.common.white,
                          fontSize: {
                            lg: "20px",
                            md: "16px",
                            xs: "12px",
                          },
                          fontWeight: {
                            lg: "800",
                            md: "600",
                            xs: "400",
                          },
                        })}
                      >
                        {item.title}:
                      </Typography>
                      <Typography
                        sx={(theme) => ({
                          color: theme.palette.common.white,
                          fontSize: {
                            lg: "20px",
                            md: "16px",
                            xs: "12px",
                          },
                        })}
                      >
                        {item.value}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:col-span-1 col-span-3 gap-y-10">
              <Typography
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: {
                    lg: "20px",
                    md: "16px",
                    xs: "12px",
                  },
                  fontWeight: {
                    lg: "800",
                    md: "600",
                    xs: "400",
                  },
                })}
              >
                دسترسی سریع
              </Typography>
              <div className="flex flex-col gap-y-3">
                {quickActions?.map((item) => (
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={"/filled-star-icon.svg"}
                      alt="icon"
                      width={18}
                      height={18}
                    />
                    <Typography
                      sx={(theme) => ({
                        fontSize: {
                          lg: "20px",
                          md: "16px",
                          xs: "12px",
                        },
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
            <div className="flex flex-col lg:col-span-1 col-span-3 gap-y-10">
              <Typography
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: {
                    lg: "20px",
                    md: "16px",
                    xs: "12px",
                  },
                  fontWeight: {
                    lg: "800",
                    md: "600",
                    xs: "400",
                  },
                })}
              >
                لینک های مهم
              </Typography>
              <div className="flex flex-col gap-y-3">
                {importantLinks?.map((item) => (
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={"/filled-star-icon.svg"}
                      alt="icon"
                      width={18}
                      height={18}
                    />
                    <Typography
                      sx={(theme) => ({
                        fontSize: {
                          lg: "20px",
                          md: "16px",
                          xs: "12px",
                        },
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
            <div className="flex lg:col-span-2 col-span-7 lg:flex-col items-center gap-x-4 flex-row gap-y-10">
              <div className="flex flex-col">
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.common.white,
                    fontSize: {
                      lg: "20px",
                      md: "16px",
                      xs: "12px",
                    },
                    fontWeight: {
                      lg: "800",
                      md: "600",
                      xs: "400",
                    },
                  })}
                >
                  شبکه اجتماعی
                </Typography>
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.common.white,
                    fontSize: {
                      lg: "18px",
                      md: "16px",
                      xs: "12px",
                    },
                    textAlign: "justify",
                    maxWidth: {
                      lg: "314px",
                      xs: "100%",
                    },
                  })}
                >
                  لورم ایپسوم مـتن ساختگی با تــولید سادگی نامفـهـوم از صنـعـت
                  چـاپ، و با استـفــاده از طــراحــان گــرافــیـک است، چاپگرها و
                  متون بلکه روزنامه و مـجله در ستون و سطرآنچنان که لازم است.
                </Typography>
              </div>
              <div className="flex lg:flex-row flex-col items-center justify-center gap-3 min-w-[32px]">
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
