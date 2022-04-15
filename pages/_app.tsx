import NextProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Unimodas7l</title>
        <meta name="description" content="Moda Feminina do P ao Plus" />
        <link rel="icon" href="/unimodasfavi.png" />
      </Head>

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
    </>
  );
}

export default MyApp;
