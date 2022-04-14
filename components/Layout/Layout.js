import { useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { footer } from "./Layout.module.scss";
import AlertList from "../Alert/AlertList";

const Layout = ({ children }) => {
  const {
    currentTheme: { primary },
  } = useContext(ThemeContext);

  // This prevent's the body from scrolling when the navigation is open

  const pageRef = useRef(null);

  const lockScroll = () => {
    if (document) {
      const input = document.querySelector("#navigationToggle");
      setTimeout(() => {
        if (input.checked) {
          disableBodyScroll(pageRef.current);
        } else {
          enableBodyScroll(pageRef.current);
        }
      }, 0);
    }
  };

  return (
    <>
      <Header lockScroll={lockScroll} />
      <Nav />
      <main className={`${primary} page`} ref={pageRef}>
        <AlertList />
        {children}
      </main>
      <footer className={`${primary} ${footer}`}>
        Fleet Star Pty LTD &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
};

export default Layout;
