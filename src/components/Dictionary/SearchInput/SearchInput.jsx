import React from "react";

import { Search } from "lucide-react";
import styles from "./SearchInput.module.css";

function SearchInput({ onSubmit }) {
  const searchedWord = React.useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const word = searchedWord.current.value.toLowerCase();
    onSubmit(word);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input ref={searchedWord} type="text" placeholder="Type the word" />
        <button className={styles.searchIcon}>
          <Search />
        </button>
      </div>
    </form>
  );
}

export default SearchInput;
