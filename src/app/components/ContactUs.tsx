"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="container lg:mb-[380px] mb-[100px] lg:px-0 px-2">
      <div className="grid grid-cols-2">
        <div className="lg:col-span-1 col-span-2 flex flex-col mt-20 relative">
          <div className="absolute w-full lg:h-[150px] bottom-0 bg-request-form-background-linear z-50"></div>

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
                <div className="h-[1px] flex-1 bg-white opacity-50"></div>
                <Image
                  src={"/star.png"}
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
              <div className="bg-input flex items-center gap-x-2 border p-3.5 border-[#ffffff50] bg-input-background">
                <Image src={"/user-icon.svg"} alt="" width={20} height={20} />
                <input
                  type="text"
                  className="bg-transparent lg:placeholder:text-[22px] sm:placeholder:text-[12px] text-white lg:text-[22px] text-[12px] w-full focus-visible:outline-none"
                  placeholder="نام و نام خانوادگی"
                />
              </div>
              <div className="bg-input flex items-center gap-x-2 border p-3.5 border-[#ffffff50] bg-input-background">
                <Image src={"/phone-icon.svg"} alt="" width={20} height={20} />
                <input
                  type="text"
                  className="bg-transparent lg:placeholder:text-[22px] sm:placeholder:text-[12px] text-white lg:text-[22px] text-[12px] w-full focus-visible:outline-none"
                  placeholder="شماره تماس"
                />
              </div>
              <textarea
                name=""
                id=""
                placeholder="متن پیام"
                rows={6}
                className="border border-[#ffffff50] bg-input-background p-3.5 bg-transparent lg:placeholder:text-[22px] sm:placeholder:text-[12px] text-white lg:text-[22px] text-[12px] w-full focus-visible:outline-none"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-1 col-span-2 flex items-end lg:order-2 order-3">
          <div className="absolute h-full w-full bg-request-background-linear"></div>
          <Image
            src={"/hercules-phone.png"}
            alt=""
            width={825}
            height={620}
            className="lg:mr-[-70px] lg:w-[825px] lg:h-[620px] w-[350px] h-[270px] mx-auto"
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
            color: theme.palette.common.white,
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
          })}
          className="lg:order-3 order-2"
        >
          <Image src={"/councilArrow.svg"} alt="" height={20} width={53} />
          ارسال
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
