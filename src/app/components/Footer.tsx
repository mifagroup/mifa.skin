"use client";
import Link from "next/link";
import { Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
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
];

const Footer = () => {
  const theme = useTheme();

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-no-repeat bg-bottom bg-[100%,1920px] lg:px-0 px-2 ${
        theme.palette.mode === "dark"
          ? "bg-bottom-cloud"
          : "bg-bottom-cloud-light"
      }`}
    >
      <div>
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
                {connectionItems?.map((item, index) => (
                  <div key={index} className="flex items-center gap-x-3">
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
                {quickActions?.map((item, index) => (
                  <div key={index} className="flex items-center gap-x-2">
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
                {importantLinks?.map((item, index) => (
                  <div key={index} className="flex items-center gap-x-2">
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
