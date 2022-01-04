import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeContext } from "../../contexts/ThemeContext";
import logo from "../../public/imgs/fs_logo2.png";
import { header, imageWrapper, checkbox } from "./Header.module.scss";

const Header = () => {
  const {
    currentTheme: { primary, secondary },
    toggleDarkMode,
  } = useContext(ThemeContext);

  return (
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
              />
            </a>
          </Link>
        </div>
        <input
          type="checkbox"
          className={checkbox}
          name="navigationToggle"
          id="navigationToggle"
        />
        <label className="card" htmlFor="navigationToggle">
          <div></div>
          Navigation Toggle
        </label>
      </div>
    </header>
  );
};

export default Header;
