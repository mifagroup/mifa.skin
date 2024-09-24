import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { darkTheme, GlobalStyle } from "./config/theme";
const doran = localFont({
  src: [
    {
      path: "./fonts/DoranFaNum-Thin.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/DoranFaNum-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/DoranFaNum-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DoranFaNum-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/DoranFaNum-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/DoranFaNum-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${doran.className}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>
            {children}
            <GlobalStyle />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
