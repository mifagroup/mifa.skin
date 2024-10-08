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
    <div className="lg:pb-[300px] pb-[50px] bg-our-beginning-cloud bg-no-repeat bg-[center_top_3rem] bg-cover">
      <div className="container">
        <div className="grid grid-cols-5">
          <div className="lg:col-span-2 col-span-5 relative lg:order-1 order-2">
            <div className="absolute h-[350px] lg:bottom-[140px] bottom-0 w-full md:bg-fist-inner-gradient bg-fist-inner-gradient-res"></div>
            <Image
              src={"/fists.png"}
              alt=""
              width={520}
              height={380}
              className="md:w-[520px] md:h-[380px] w-[270px] h-[200px] mx-auto"
            />
          </div>
          <div className="lg:col-span-3 col-span-5 flex flex-col gap-y-4 lg:order-2 order-1">
            <div className="flex justify-between items-center gap-x-4">
              <Image
                src={"/star.png"}
                alt="star"
                height={39}
                width={39}
                className="lg:w-[39px] lg:h-[39px] w-[25px] h-[25px]"
              />
              <div className="h-[1px] flex-1 bg-white opacity-50"></div>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: {
                    lg: "40px",
                    md: "30px",
                    xs: "20px",
                  },
                  fontWeight: "bold",
                })}
              >
                شروع کار میفا
              </Typography>
            </div>
            <Typography
              sx={(theme) => ({
                color: theme.palette.common.white,
                fontSize: {
                  lg: "22px",
                  md: "20px",
                  xs: "10px",
                },
                textAlign: "justify",
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
              {stats?.map((stat , index) => (
                <div key={index} className="flex flex-col gap-y-5 items-center">
                  <Typography
                    sx={(theme) => ({
                      fontSize: {
                        lg: "80px",
                        md: "60px",
                        xs: "40px",
                      },
                      color: theme.palette.common.white,
                      fontWeight: "bold",
                    })}
                  >
                    {stat.count}
                    <span className="text-secondary">+</span>
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontSize: {
                        lg: "18px",
                        md: "16px",
                        xs: "10px",
                      },
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
                height: {
                  lg: "50px",
                  md: "40px",
                  xs: "30px",
                },
                borderRadius: "0px",
                paddingY: "0px",
                color: theme.palette.common.white,
                gap: "4px",
                fontSize: {
                  lg: "20px",
                  md: "14px",
                  xs: "10px",
                },
                width: "fit-content",
                marginTop: {
                  lg: "20px",
                  md: "10px",
                  xs: "5px",
                },
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
