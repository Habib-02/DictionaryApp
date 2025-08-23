import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = React.createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(() => {
    return window.localStorage.getItem("theme") || "light";
  });

  React.useEffect(() => {
    window.localStorage.setItem("theme", theme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}

export default ThemeProvider;
