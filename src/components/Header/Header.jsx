import styles from "./Header.module.css";

import DictionaryLogo from "@components/DictionaryLogo";
import FontToggler from "@/components/Header/FontToggler";
import ThemeToggler from "@/components/Header/ThemeToggler";

import { Moon } from "lucide-react";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <DictionaryLogo />
        <div className={styles.controls}>
          <FontToggler />
          <div className={styles.themeToggler}>
            <ThemeToggler />
            <Moon className={styles.moonIcon} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
