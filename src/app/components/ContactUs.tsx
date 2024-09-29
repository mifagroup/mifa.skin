"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="container mb-[380px]">
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex flex-col mt-20 relative">
          <div className="absolute w-full h-[150px] bottom-0 bg-request-form-background-linear z-50"></div>

          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <div className="flex justify-between items-center gap-x-2">
                <Typography
                  sx={(theme) => ({
                    color: theme.palette.common.white,
                    fontSize: "40px",
                    fontWeight: "bold",
                  })}
                >
                  درخواست مشاوره برای پروژه
                </Typography>
                <div className="h-[1px] flex-1 bg-white opacity-50"></div>
                <Image src={"/star.png"} alt="star" height={39} width={39} />
              </div>
              <Typography
                sx={(theme) => ({
                  fontSize: "22px",
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
                  className="bg-transparent placeholder:text-[22px] text-white text-[22px] w-full focus-visible:outline-none"
                  placeholder="نام و نام خانوادگی"
                />
              </div>
              <div className="bg-input flex items-center gap-x-2 border p-3.5 border-[#ffffff50] bg-input-background">
                <Image src={"/phone-icon.svg"} alt="" width={20} height={20} />
                <input
                  type="text"
                  className="bg-transparent placeholder:text-[22px] text-white text-[22px] w-full focus-visible:outline-none"
                  placeholder="شماره تماس"
                />
              </div>
              <textarea
                name=""
                id=""
                placeholder="متن پیام"
                rows={6}
                className="border border-[#ffffff50] bg-input-background p-3.5 bg-transparent placeholder:text-[22px] text-white text-[22px] w-full focus-visible:outline-none"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="relative flex items-end">
          <div className="absolute h-full w-full bg-request-background-linear"></div>
          <Image
            src={"/hercules-phone.png"}
            alt=""
            width={785}
            height={625}
            className="mr-[-70px]"
          />
        </div>
        <Button
          sx={(theme) => ({
            backgroundColor: theme.palette.secondary.main,
            height: "41px",
            borderRadius: "0px",
            paddingY: "0px",
            color: theme.palette.common.white,
            gap: "4px",
            fontSize: "20px",
            width: "140px",
            marginTop: "20px",
          })}
        >
          <Image src={"/councilArrow.svg"} alt="" height={20} width={53} />
          ارسال
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
