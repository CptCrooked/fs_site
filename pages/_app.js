import Layout from "../components/Layout/Layout";
import AlertContextProvider from "../contexts/AlertContext";
import FormContextProvider from "../contexts/FormContext";
import ImageContextProvider from "../contexts/ImageContext";
import ThemeContextProvider from "../contexts/ThemeContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <AlertContextProvider>
        <FormContextProvider>
          <ImageContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ImageContextProvider>
        </FormContextProvider>
      </AlertContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
