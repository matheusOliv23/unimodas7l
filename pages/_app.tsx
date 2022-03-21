import NextProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NextProgress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
