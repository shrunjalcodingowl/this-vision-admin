import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

import RTL from "../src/theme/RTL";
import ThemeSettings from "../src/theme/ThemeSettings";
import createEmotionCache from "../src/createEmotionCache";
import FullLayout from "../src/layouts/FullLayout";
import BlankLayout from "../src/layouts/BlankLayout";

import "../styles/style.scss";
import "../data";
import wrapper from "../src/store/Store";

const clientSideEmotionCache = createEmotionCache();

const layouts = {
  Blank: BlankLayout,
};

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  const customizer = useSelector((state) => state?.CustomizerReducer);
  const Layout = layouts[Component.layout] || FullLayout;
  const theme = ThemeSettings();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>This Vision | Admin Territory</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <RTL direction={customizer?.activeDir || "ltr"}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RTL>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

// 🔥 Required to inject the store during SSR (Fixes "initialState: undefined" issue)
MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default wrapper.withRedux(MyApp);
