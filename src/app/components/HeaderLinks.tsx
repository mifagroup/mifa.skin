"use client";
import { useScrollspy } from "@makotot/ghostui";
import { Box, Popover, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { MutableRefObject, useRef } from "react";

const HeaderLinks = ({
  sectionRefs,
  links,
}: {
  sectionRefs: MutableRefObject<HTMLElement | null>[];
  links: {
    id: number;
    title: string;
    children?: { title: string }[];
  }[];
}) => {
  const activeSection = useScrollspy({
    sectionRefs: sectionRefs,
    offset: -100, // You can adjust this value to change when a section is considered active
  });

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
        {links?.map((link, index) => {
          const isActive =
            activeSection.currentElementIndexInViewport === index;
          if (link.children?.length) {
            return (
              <div className="cursor-pointer" key={link.id}>
                <Typography
                  aria-describedby={id}
                  onClick={handleClick}
                  sx={(theme) => ({
                    color: theme.palette.common.white,
                    fontSize: "20px",
                    fontWeight: "light",
                    lineHeight: "16px",
                    whiteSpace: "nowrap",
                    display: "flex",
                    gap: "5px",
                  })}
                >
                  {link.title}{" "}
                  <Image
                    src={"/icons/arrow-down.svg"}
                    alt=""
                    width={12}
                    height={6}
                    className={`${
                      open ? "transform rotate-180" : ""
                    } transition-transform`}
                  />
                </Typography>

                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    horizontal: "right",
                    vertical: "top",
                  }}
                  sx={{
                    marginTop: "20px",
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        minHeight: "fit-content",
                        paddingY: "25px",
                        paddingX: "15px",
                      },
                    },
                  }}
                >
                  <div className="flex flex-col gap-y-5">
                    {link.children?.map((child) => (
                      <Link href={""}>{child.title}</Link>
                    ))}
                  </div>
                </Popover>
              </div>
            );
          } else {
            return (
              <div
                className="cursor-pointer"
                key={link.id}
                onClick={() => {
                  // Scroll to the corresponding section
                  sectionRefs[link.id].current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
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
            );
          }
        })}
      </div>
    </div>
  );
};

export default HeaderLinks;
