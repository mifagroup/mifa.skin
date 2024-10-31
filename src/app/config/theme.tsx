"use client";
import { createTheme, Theme } from "@mui/material";
import { GlobalStyles } from "@mui/material";
const darkTheme = createTheme({
  typography: {
    fontFamily: "__doran_a0f346, __doran_Fallback_a0f346",
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 350,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#141E45",
    },
    secondary: {
      main: "#AB1E37",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    background: {
      paper: "#141E45",
      default: "#141E45",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  },
});

const lightTheme = createTheme({
  typography: {
    fontFamily: "__doran_a0f346, __doran_Fallback_a0f346",
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 350,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#141E45",
    },
    secondary: {
      main: "#AB1E37",
    },
    common: {
      black: "#000000",
      white: "#141E45",
    },
    background: {
      paper: "#ffffff",
      default: "#FFF",
    },
    text: {
      primary: "#141E45",
      secondary: "#000000",
    },
  },
});

const GlobalStyle = ({ theme }: { theme: Theme }) => (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: theme.palette.background.default,
        direction: "rtl",
      },
    }}
  />
);

export { darkTheme, lightTheme, GlobalStyle };
