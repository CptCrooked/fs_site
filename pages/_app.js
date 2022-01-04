import Layout from "../components/Layout/Layout";
import ThemeContextProvider from "../contexts/ThemeContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}

export default MyApp;
