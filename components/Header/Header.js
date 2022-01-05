import { useContext, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "../../contexts/ThemeContext";
import logo from "../../public/imgs/fs_logo2.png";
import {
  header,
  imageWrapper,
  checkbox,
  menuButton,
} from "./Header.module.scss";

const Header = ({ lockScroll }) => {
  const {
    currentTheme: { primary, secondary },
    toggleDarkMode,
  } = useContext(ThemeContext);

  const timeOutRef = useRef(null);

  const toggleAnimation = (e) => {
    e.target.classList.add("pressed");
    timeOutRef = setTimeout(() => {
      e.target.classList.remove("pressed");
    }, 150);
    lockScroll();
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeOutRef);
    };
  });

  return (
    <>
      <input
        type="checkbox"
        className={checkbox}
        name="navigationToggle"
        id="navigationToggle"
      />
      <header className={`${primary} ${header}`}>
        <div role="presentation" className="wrapper flex">
          <div className={`${imageWrapper} card card-light`}>
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  alt="Fleet Star Logo"
                  layout="fixed"
                  width={120}
                  priority="true"
                />
              </a>
            </Link>
          </div>
        </div>
      </header>
      <label
        role="button"
        className={`${primary} ${menuButton}`}
        htmlFor="navigationToggle"
        onClick={(e) => toggleAnimation(e)}
      >
        <div></div>
        <div></div>
        <div></div>
        Navigation Toggle
      </label>
    </>
  );
};

export default Header;
