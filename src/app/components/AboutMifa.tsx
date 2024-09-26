"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutMifa = () => {
  return (
    <div className="bg-about-mifa 2xl:bg-cover bg-bottom bg-no-repeat h-[950px] flex justify-between items-center relative">
      <div className="h-[950px] w-full absolute top-0 z-30 bg-about-linear-gradient"></div>
      <div className="container">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-8 z-50 max-w-[750px] pt-16">
            <div className="flex items-center gap-x-3">
              <Image
                src={"/about-us-title-line.png"}
                alt="line"
                width={506}
                height={39}
              />
              <Typography
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: "40px",
                  fontWeight: "bold",
                })}
              >
                دنیای دیجیتال
              </Typography>
            </div>
            <div className="flex flex-col gap-y-5">
              <Typography
                sx={(theme) => ({
                  fontSize: "40px",
                  color: theme.palette.common.white,
                  fontWeight: "bold",
                })}
              >
                آژانس دیجیتال مـارکتیـنگ میفا، از ایده تا پدیده
              </Typography>
              <Typography
                sx={(theme) => ({
                  fontSize: "22px",
                  fontWeight: "400",
                  color: theme.palette.common.white,
                  textAlign: "justify",
                })}
              >
                دنیای دیجیتال حالا دیگــر تبـدیل به جزیی جدایی نا‌پذیر از
                زنــدگــی همـــه مـــا شــده است. شـــاید بـــه جرات بتـــوان
                گـفت، بخشی از معنای زندگی همه ما در دنیــای دیـجیـتال تعـریف
                می‌شود و فـلسفه وجــودی آن، چیزی جدا از واژه “زیستـن” و
                تجــربه‌هــای زیــســته ما نیست. حـــالا دیگر نمی‌توان
                مصدر“بودن” را بــدون دنــیای دیجیــتال تعریف کــرد. دنیـای
                شــگـرفت و عمیق و پر از ماجراجویی‌های عجیب…
              </Typography>
            </div>
            <div className="flex items-center gap-x-[170px] z-10 pt-5">
              <Button
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: "20px",
                  fontWeight: "500",
                })}
              >
                <Image
                  src={"/councilArrow.svg"}
                  alt="arrow"
                  width={67}
                  height={24}
                />
                مشاوره رایگان
              </Button>
              <Button
                sx={(theme) => ({
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: 0,
                  width: "166px",
                  height: "41px",
                  fontSize: "20px",
                  fontWeight: "500",
                  color: theme.palette.common.white,
                })}
              >
                در باره میفا
              </Button>
            </div>
          </div>
          <Image
            src={"/hercules-ai.png"}
            alt="image"
            width={418}
            height={695}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMifa;
