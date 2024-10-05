"use client";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const links = [
  {
    id: 1,
    title: "میفا",
  },
  {
    id: 2,
    title: "خدمات",
  },
  {
    id: 3,
    title: "درباره ما",
  },
  {
    id: 4,
    title: "تماس با ما",
  },
];

const HeaderLinks = () => {
  return (
    <div className="justify-between items-center bg-[#ffffff30] backdrop-blur-[5px] lg:flex hidden">
      <div className="flex items-center gap-x-0 py-3 pr-12 px-6">
        <Image src={"/magnifier.svg"} alt="" width={12} height={12} />
        <input
          type="text"
          className="bg-transparent focus-visible:outline-none placeholder:!text-[12px] text-white text-[12px] min-w-[200px]"
          placeholder="جستجو..."
        />
      </div>
      <div className="flex gap-x-[80px] pl-16">
        {links?.map((link) => (
          <div className="cursor-pointer" key={link.id}>
            <Typography
              sx={(theme) => ({
                color: theme.palette.common.white,
                fontSize: "20px",
                fontWeight: "light",
                lineHeight: "16px",
                whiteSpace: "nowrap",
              })}
            >
              {link.title}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderLinks;
