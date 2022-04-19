import Layout from "../components/Layout/Layout";
import AlertContextProvider from "../contexts/AlertContext";
import FormContextProvider from "../contexts/FormContext";
import ImageContextProvider from "../contexts/ImageContext";
import ThemeContextProvider from "../contexts/ThemeContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <ImageContextProvider>
        <AlertContextProvider>
          <FormContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </FormContextProvider>
        </AlertContextProvider>
      </ImageContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
