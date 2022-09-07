import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import Inspect from "inspx";

function MyApp({ Component, pageProps }) {
  return (
    <Inspect margin size padding>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Inspect>
  );
}

export default MyApp;
