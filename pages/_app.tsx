import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Header from "../components/Header/Header";
import "../styles/globalsFonts.css";
import GlobalStyle from "../styles/GlobalStyle";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(dark);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        toggleTheme={() => setTheme(theme.title === "light" ? dark : light)}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
