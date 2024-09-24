"use client";
import { Button, ButtonOwnProps, Theme } from "@mui/material";
import Image from "next/image";
import React from "react";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  const loginButtonStyles = (theme: Theme) => ({
    border: `1px solid ${theme.palette.common.white}`,
    color: theme.palette.common.white,
    fontWeight: "light",
    borderRadius: 0,
    height: "24px",
    width: "93px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    background:
      "linear-gradient(90deg, #ffffff30, #ffffff10) , linear-gradient(90deg, #ffffff30 30%, #ffffff10)",
  });

  return (
    <div className="container">
      <div className="pt-10 flex items-center justify-between sticky top-0 bg-transparent">
        <Image src={"/logo.svg"} alt="mifa-logo" width={125} height={40} />
        <HeaderLinks />
        <Button variant="outlined" sx={loginButtonStyles}>
          ورود / ثبت نام
        </Button>
      </div>
    </div>
  );
};

export default Header;
