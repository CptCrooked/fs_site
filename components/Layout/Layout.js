import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const Layout = ({ children }) => {
  const {
    currentTheme: { primary },
  } = useContext(ThemeContext);

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

  let show = false;
  show = true;

  const showLayoutBounds = () => {
    if (show) {
      return { boxShadow: "inset 0 0 0 2px red" };
    }
  };

  return (
    <>
      <Header lockScroll={lockScroll} />
      <Nav />
      <main className={`${primary} page`} ref={pageRef}>
        <div className="contentWrapper" style={showLayoutBounds()}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
