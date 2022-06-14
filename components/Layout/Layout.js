import Head from "next/head";
import favicon from "../../public/favicon.svg";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { footer } from "./Layout.module.scss";
import AlertList from "../Alert/AlertList";
import Contact from "../Contact/Contact";

const Layout = ({ children }) => {
  const {
    currentTheme: { primary },
  } = useContext(ThemeContext);

  // This prevent's the body from scrolling when the navigation is open
  const pageRef = useRef(null);

  const lockScroll = () => {
    if (document && document.body.clientWidth < 768) {
      const input = document.querySelector("#navigationToggle");
      setTimeout(() => {
        if (input.checked === true) {
          disableBodyScroll(pageRef.current);
        } else {
          enableBodyScroll(pageRef.current);
        }
      }, 0);
    }
  };

  const closeNavOnLinkClick = () => {
    const input = document.querySelector("#navigationToggle");
    input.checked = input.checked ? false : true;
    lockScroll();
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image" href="/favicon.svg" />
      </Head>
      <Header lockScroll={lockScroll} />
      <Nav closeNavOnLinkClick={closeNavOnLinkClick} />
      <main className={`${primary} page`} ref={pageRef}>
        <AlertList />
        {children}
        <Contact />
      </main>
      <footer className={`${primary} ${footer}`}>
        Fleet Star Pty LTD &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Layout;
