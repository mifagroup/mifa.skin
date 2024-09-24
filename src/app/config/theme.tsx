"use client";
import { createTheme } from "@mui/material";
import { GlobalStyles } from "@mui/material";
const darkTheme = createTheme({
  typography: {
    fontFamily: "__doran_a0f346, __doran_Fallback_a0f346",
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

const GlobalStyle = () => (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: darkTheme.palette.background.default,
        direction: "rtl",
      },
    }}
  />
);

export { darkTheme, GlobalStyle };
