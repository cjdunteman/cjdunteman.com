import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Inspect from "inspx";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>CJ Dunteman</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="CJ Dunteman's personal developer website."
        />
      </Head>
      <Inspect margin size padding>
        <ThemeProvider attribute="class">
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </ThemeProvider>
      </Inspect>
    </>
  );
}

export default MyApp;
