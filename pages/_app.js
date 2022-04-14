import Layout from "../components/Layout/Layout";
import AlertContextProvider from "../contexts/AlertContext";
import FormContextProvider from "../contexts/FormContext";
import ThemeContextProvider from "../contexts/ThemeContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <AlertContextProvider>
        <FormContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FormContextProvider>
      </AlertContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
