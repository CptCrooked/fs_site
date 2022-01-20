import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import logo from "../../public/imgs/fs_logo2.png";
import Toggle from "../Toggle/Toggle";
import { nav, overlay } from "./Nav.module.scss";

const Nav = () => {
  const {
    currentTheme: { primary, secondary },
    toggleDarkMode,
  } = useContext(ThemeContext);

  return (
    <nav className={`${primary} ${nav}`} aria-label="Main Navigation">
      <div aria-hidden="true" className={overlay}></div>
      <ul className={`${primary} card`}>
        <div aria-hidden="true" className={`card`}>
          <Image src={logo} alt="" />
        </div>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/gallery">
            <a>Gallery</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <Toggle />
      </ul>
    </nav>
  );
};

export default Nav;
