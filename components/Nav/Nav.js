import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import logo from "../../public/imgs/fs_logo2.png";
import Toggle from "../Toggle/Toggle";
import { nav, overlay, activeLink } from "./Nav.module.scss";

const Nav = ({ closeNavOnLinkClick }) => {
  const {
    currentTheme: { primary, secondary },
    toggleDarkMode,
  } = useContext(ThemeContext);

  const router = useRouter();

  return (
    <nav className={`${primary} ${nav}`} aria-label="Main Navigation">
      <div aria-hidden="true" className={overlay}></div>
      <ul className={`${primary} card`}>
        <div aria-hidden="true" className={`card`}>
          <Image src={logo} alt="" />
        </div>
        <li className={router.asPath === "/" ? activeLink : ""}>
          <Link href="/">
            <a onClick={closeNavOnLinkClick}>Home</a>
          </Link>
        </li>
        <li className={router.asPath === "/gallery" ? activeLink : ""}>
          <Link href="/gallery">
            <a onClick={closeNavOnLinkClick}>Gallery</a>
          </Link>
        </li>
        <li className={router.asPath === "/about" ? activeLink : ""}>
          <Link href="/about">
            <a onClick={closeNavOnLinkClick}>About</a>
          </Link>
        </li>
        <Toggle />
      </ul>
    </nav>
  );
};

export default Nav;
