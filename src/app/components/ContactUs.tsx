"use client";
import { Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { MutableRefObject } from "react";

const ContactUs = ({
  sectionRef,
}: {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  const theme = useTheme();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      ref={sectionRef}
      id="contactSection"
    >
      <div className="container lg:px-0 px-2">
      <div className="grid grid-cols-2">
        <div className="lg:col-span-1 col-span-2 flex flex-col relative">
          <div
            className={`absolute w-full lg:h-[150px] bottom-0 z-50 ${
              theme.palette.mode === "dark" &&
              "bg-request-form-background-linear"
            }`}
          ></div>

          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <div className="flex justify-between items-center gap-x-2">
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
                  درخواست مشاوره برای پروژه
                </Typography>
                <div
                  className={`h-[1px] flex-1 opacity-50 ${
                    theme.palette.mode === "dark" ? "bg-white" : "bg-primary"
                  }`}
                ></div>
                <Image
                  src={
                    theme.palette.mode === "dark"
                      ? "/star.png"
                      : "/star-light.png"
                  }
                  alt="star"
                  height={39}
                  width={39}
                  className="lg:w-[39px] lg:h-[39px] w-[25px] h-[25px]"
                />
              </div>
              <Typography
                sx={(theme) => ({
                  fontSize: {
                    lg: "20px",
                    md: "16px",
                    xs: "12px",
                  },
                  color: theme.palette.common.white,
                })}
              >
                ایمیل خود را برای ما وارد کنید تا از مشاورین ما برای شروع پروژه
                و چگونگی آن بهره مند شوید.
              </Typography>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="bg-input flex items-center gap-x-2 border p-3.5 border-[#ffffff50] bg-input-background shadow-md">
                <Image
                  src={
                    theme.palette.mode === "dark"
                      ? "/user-icon.svg"
                      : "/user-icon-light.svg"
                  }
                  alt=""
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  className={`bg-transparent lg:placeholder:text-[22px] sm:placeholder:text-[12px] ${
                    theme.palette.mode === "dark"
                      ? "text-white"
                      : "text-primary"
                  } lg:text-[22px] text-[12px] w-full focus-visible:outline-none`}
                  placeholder="نام و نام خانوادگی"
                />
              </div>
              <div className="bg-input flex items-center gap-x-2 border p-3.5 border-[#ffffff50] bg-input-background shadow-md">
                <Image
                  src={
                    theme.palette.mode === "dark"
                      ? "/phone-icon.svg"
                      : "/phone-icon-light.svg"
                  }
                  alt=""
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  className={`bg-transparent lg:placeholder:text-[22px] sm:placeholder:text-[12px] ${
                    theme.palette.mode === "dark"
                      ? "text-white"
                      : "text-primary"
                  } lg:text-[22px] text-[12px] w-full focus-visible:outline-none`}
                  placeholder="شماره تماس"
                />
              </div>
              <textarea
                name=""
                id=""
                placeholder="متن پیام"
                rows={6}
                className={`border border-[#ffffff50] bg-input-background p-3.5 bg-transparent lg:placeholder:text-[22px] sm:placeholder:text-[12px] ${
                  theme.palette.mode === "dark" ? "text-white" : "text-primary"
                } lg:text-[22px] text-[12px] w-full focus-visible:outline-none shadow-md`}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-1 col-span-2 flex items-end lg:order-2 order-3">
          <div
            className={
              theme.palette.mode === "dark"
                ? "absolute h-full w-full bg-request-background-linear"
                : "absolute h-full w-full bg-request-background-linear-light"
            }
          ></div>
          <Image
            src={"/hercules-phone.png"}
            alt=""
            width={825}
            height={620}
            className="lg:mr-[45px] lg:w-[825px] lg:h-[620px] w-[350px] h-[270px] mx-auto"
          />
        </div>
        <Button
          sx={(theme) => ({
            backgroundColor: theme.palette.secondary.main,
            height: {
              xs: "30px",
              md: "41px",
            },
            borderRadius: "0px",
            paddingY: "0px",
            color:
              theme.palette.mode === "light"
                ? "#ffffff"
                : theme.palette.common.white,
            gap: "4px",
            fontSize: {
              xs: "10px",
              md: "14px",
              lg: "20px",
            },
            width: {
              xs: "100px",
              lg: "140px",
            },
            marginTop: "20px",
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
          className="lg:order-3 order-2"
        >
          <Image src={"/councilArrow.svg"} alt="" height={20} width={53} />

          <span style={{ position: "relative", zIndex: 2 }}>ارسال</span>
        </Button>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
