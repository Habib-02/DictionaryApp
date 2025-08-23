import React from "react";
import { ThemeContext } from "@components/App/ThemeProvider";

import * as Switch from "@radix-ui/react-switch";
import styles from "./ThemeToggler.module.css";

function ThemeToggler() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const checked = theme === "dark";

  return (
    <>
      <Switch.Root
        checked={checked}
        onCheckedChange={toggleTheme}
        className={styles.switchRoot}
      >
        <Switch.Thumb className={styles.switchThumb} />
      </Switch.Root>
    </>
  );
}

export default ThemeToggler;
