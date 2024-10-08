"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ButtonOwnProps,
  Drawer,
  Theme,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { MutableRefObject } from "react";
import HeaderLinks from "./HeaderLinks";

const links = [
  {
    id: 0,
    title: "میفا",
    sectionId: "heroSection",
  },
  {
    id: 4,
    title: "خدمات",
    children: [
      {
        title: "طراحی سایت",
        id: 41,
      },
      {
        title: "خدمات سئو و بهینه‌سازی سایت",
        id: 42,
      },
      {
        title: "سفارش تولید محتوا",
        id: 43,
      },
      {
        title: "خدمات سوشال مدیا",
        id: 44,
      },
      {
        title: "طراحی گرافیک",
        id: 45,
      },
    ],
  },
  {
    id: 1,
    title: "درباره ما",
    sectionId: "aboutSection",
  },
  {
    id: 2,
    title: "تماس با ما",
    sectionId: "contactSection",
  },
];

const Header = ({
  sectionRefs,
}: {
  sectionRefs: MutableRefObject<HTMLElement | null>[];
}) => {
  const [open, setOpen] = React.useState(false);

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

  const DrawerList = (
    <div className="py-10 px-8 min-w-[80vw] h-screen bg-transparent flex flex-col gap-y-10">
      <div className="flex items-center gap-x-2">
        <Image src={"/icons/magnify.svg"} alt="" width={13} height={13} />
        <input
          type="text"
          placeholder="جستجو..."
          className="bg-transparent focus-visible:outline-none placeholder:!text-white"
        />
      </div>

      <div className="flex flex-col gap-y-5">
        {links?.map((link) => {
          if (link.children?.length) {
            return (
              <Accordion
                sx={{
                  "&.MuiAccordion-root": {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    border: "none",
                    backgroundImage: "none",
                  },
                  "& .MuiAccordionSummary-root": {
                    padding: "0px",
                  },
                }}
              >
                <AccordionSummary
                  sx={{}}
                  expandIcon={
                    <Image
                      src={"/icons/arrow-down.svg"}
                      alt=""
                      width={12}
                      height={6}
                    />
                  }
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  {link.title}
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col gap-y-4">
                    {link.children.map((child) => (
                      <Typography>{child.title}</Typography>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            );
          } else {
            return (
              <Typography
                sx={{
                  fontSize: "20px",
                }}
                onClick={() => {
                  // Scroll to the corresponding section
                  sectionRefs[link.id].current?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setOpen(false);
                }}
              >
                {link.title}
              </Typography>
            );
          }
        })}
      </div>
    </div>
  );

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="container z-[99] relative">
      <div className="pt-10 flex items-center justify-between sticky top-0 bg-transparent">
        <div className="md:px-0 px-5 flex items-center gap-x-4">
          <Image
            src={"/icons/menu.svg"}
            alt=""
            width={18}
            height={10}
            onClick={toggleDrawer(true)}
            className="lg:hidden block"
          />
          <Image
            src={"/logo.svg"}
            alt="mifa-logo"
            width={125}
            height={40}
            className="md:h-[40px] md:w-[125px] h-[25px] w-[68px]"
          />
        </div>
        <HeaderLinks sectionRefs={sectionRefs} links={links} />
        <div className="invisible">
          <Button variant="outlined" sx={loginButtonStyles}>
            ورود / ثبت نام
          </Button>
        </div>
      </div>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        PaperProps={{
          style: {
            backgroundColor: "#141E4590",
            backdropFilter: "blur(30px)",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Header;
