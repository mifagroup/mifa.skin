"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const stats = [
  {
    title: "پروژه موفق",
    count: 100,
  },
  {
    title: "مشتری راضی",
    count: 100,
  },
  {
    title: "کارمند وفادار",
    count: 12,
  },
];

const OurBeginning = () => {
  return (
    <div className="pb-[300px] bg-our-beginning-cloud bg-no-repeat bg-[center_top_8rem]">
      <div className="container">
        <div className="grid grid-cols-5">
          <div className="col-span-2 relative">
            <div className="absolute h-[350px] bottom-[140px] w-full bg-fist-inner-gradient"></div>
            <Image
              src={"/fists.png"}
              alt=""
              width={520}
              height={380}
              className="w-[520px] h-[380px]"
            />
          </div>
          <div className="col-span-3 flex flex-col gap-y-4">
            <div className="flex justify-between items-center gap-x-4">
              <Image src={"/star.png"} alt="star" height={39} width={39} />
              <div className="h-[1px] flex-1 bg-white opacity-50"></div>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: "40px",
                  fontWeight: "bold",
                })}
              >
                شروع کار میفا
              </Typography>
            </div>
            <Typography
              sx={(theme) => ({
                color: theme.palette.common.white,
                fontSize: "22px",
              })}
            >
              مجموعه میفا با بیش از 5 سال سابقه به صورت رسمی در حوزه دیجــیتال
              مارکــتینگ شــروع به کار کرد. خدمـت اصلی این مجموعه در روزهـای
              آغازین، طراحی تخصصی وبسایت بود. اما رفــته رفتــه و بــا افـزایش
              ظرفیت‌ها و پتانسیل‌های موجود و هم‌چنین نیاز روز افــزون بازار به
              تولید محتوا در مدیوم‌ها و بستـــرهای مخــتلف، میفا در کنار طراحی
              وبسایت به عرصه تولیـد تخصصی محتوا نیز ورود کرد و توانســـت
              فرآیـــند صفــر تا صــدی دیــجیــتال مارکتینگ را برای برندهـــای
              متعــددی با موفــقیــت اجرا کند. میــفا اکــنون می‌تواند به شما
              متـعهد شود که از لـحظـه شــروع کـسب و کار و پـــرورش ایــده تــا
              به ثـمر نشستن و ظهور پدیده کنار شما باشد.
            </Typography>
            <div className="flex items-center justify-between">
              {stats?.map((stat) => (
                <div className="flex flex-col gap-y-5 items-center">
                  <Typography
                    sx={(theme) => ({
                      fontSize: "80px",
                      color: theme.palette.common.white,
                      fontWeight: "bold",
                    })}
                  >
                    {stat.count}
                    <span className="text-secondary">+</span>
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontSize: "18px",
                      fontWeight: "light",
                      color: theme.palette.common.white,
                      marginTop: "-40px",
                    })}
                  >
                    {stat.title}
                  </Typography>
                </div>
              ))}
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
                width: "fit-content",
              })}
            >
              <Image src={"/councilArrow.svg"} alt="" height={20} width={53} />
              اطلاعات بیشتر
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBeginning;
