import type { AppProps } from "next/app";
 import { ThemeProvider, createTheme } from "@mui/material/styles";
 import { CssBaseline, ThemeOptions } from "@mui/material";
 import { light } from "../css/MaterialTheme";
 import { useState } from "react";
 
 export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(createTheme(light as ThemeOptions));
  console.log("app.tsx");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}