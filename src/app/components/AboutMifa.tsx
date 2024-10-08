"use client";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { MutableRefObject } from "react";

const AboutMifa = ({
  sectionRef,
}: {
  sectionRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      id="aboutSection"
      ref={sectionRef}
      className="bg-about-mifa 2xl:bg-cover lg:bg-bottom bg-[0px_150px] bg-no-repeat lg:h-[950px] md:h-[620px] h-[700px] flex justify-between items-center relative lg:pt-0 md:pt-[190px] pt-[100px]"
    >
      <div className="lg:h-[950px] md:h-[750px] h-[700px] w-full absolute top-0 z-30 lg:bg-about-linear-gradient md:bg-about-linear-gradient-res bg-about-linear-gradient-res-2"></div>
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="flex flex-col lg:gap-y-8 gap-y-2 z-50 max-w-[750px] lg:pt-16 lg:px-0 px-2">
            <div className="flex justify-between items-center gap-x-4">
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
                  fontWeight: "bold",
                  whiteSpace: "nowrap",
                })}
              >
                دنیای دیجیتال
              </Typography>
            </div>
            <div className="flex flex-col lg:gap-y-5 gap-y-3">
              <Typography
                sx={(theme) => ({
                  fontSize: {
                    lg: "40px",
                    md: "30px",
                    xs: "16px",
                  },
                  color: theme.palette.common.white,
                  fontWeight: "bold",
                })}
              >
                آژانس دیجیتال مـارکتیـنگ میفا، از ایده تا پدیده
              </Typography>
              <Typography
                sx={(theme) => ({
                  fontSize: {
                    lg: "20px",
                    md: "16px",
                    xs: "10px",
                  },
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
            <div className="flex items-center lg:justify-start justify-end lg:gap-x-[170px] z-10 lg:pt-5 pt-2">
              <Button
                sx={(theme) => ({
                  color: theme.palette.common.white,
                  fontSize: {
                    lg: "20px",
                    md: "14px",
                    xs: "10px",
                  },
                  fontWeight: {
                    lg: "500",
                    md: "400",
                    xs: "300",
                  },
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
                  width: {
                    lg: "166px",
                    md: "100px",
                    xs: "80px",
                  },
                  height: {
                    lg: "41px",
                    md: "35px",
                    xs: "30px",
                  },
                  fontSize: {
                    lg: "20px",
                    md: "14px",
                    xs: "10px",
                  },
                  fontWeight: {
                    md: "500",
                    xs: "400",
                  },
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
            className="lg:!h-[695px] lg:!w-[418px] !h-[400px] !w-[260px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMifa;
