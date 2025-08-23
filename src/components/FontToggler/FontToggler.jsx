import React from "react";
import styles from "./FontToggler.module.css";
import { ChevronDown } from "lucide-react";

const FONTS = {
  "Sans Serif": "var(--font-sans-serif)",
  Serif: "var(--font-serif)",
  Mono: "var(--font-mono)",
};

function FontToggler() {
  const [fontKey, setFontKey] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  // Get the font from local storage
  React.useEffect(() => {
    const savedFontKey = window.localStorage.getItem("selectedFontKey");
    setFontKey(savedFontKey || "Sans Serif");
    setIsLoaded(true);
  }, []);

  // Save the font into local storage
  React.useEffect(() => {
    if (!isLoaded) return;

    window.localStorage.setItem("selectedFontKey", fontKey);
    document.body.style.fontFamily = FONTS[fontKey];
  }, [fontKey, isLoaded]);

  const handleSelect = React.useCallback((fontName) => {
    setFontKey(fontName);
    setIsOpen(false);
  }, []);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(`.${styles.dropdown}`)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);

      return () => window.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <>
      <div className={styles.dropdown}>
        <button
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={`${styles.button} ${isOpen ? styles.buttonOpen : ""}`}
        >
          <span style={{ fontFamily: FONTS[fontKey] }}>{fontKey}</span>
          <ChevronDown
            className={`${styles.chevron} ${
              isOpen ? styles.chevronRotated : ""
            }`}
          />
        </button>

        {isOpen && (
          <ul role="listbox" className={styles.menu}>
            {Object.keys(FONTS).map((fontName) => (
              <li key={fontName}>
                <DropdownOption
                  fontName={fontName}
                  fontKey={fontKey}
                  onSelect={handleSelect}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

function DropdownOption({ fontName, fontKey, onSelect }) {
  return (
    <button
      role="option"
      aria-selected={fontKey === fontName}
      onClick={() => onSelect(fontName)}
      className={`${styles.option} ${
        fontKey === fontName ? styles.optionSelected : ""
      }`}
      style={{ fontFamily: FONTS[fontName] }}
    >
      {fontName}
    </button>
  );
}

export default FontToggler;
