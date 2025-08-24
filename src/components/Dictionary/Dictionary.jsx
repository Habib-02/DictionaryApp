import React from "react";

import SearchedWord from "@/components/Dictionary/SearchedWord";
import SearchInput from "@components/Dictionary/SearchInput";
import { DICTIONARY_API } from "@/constants";
import styles from "./Dictionary.module.css";
import Meaning from "./Meanings";

import { ExternalLink } from "lucide-react";

function Dictionary() {
  const [word, setWord] = React.useState("");
  const [wordMeanings, setWordMeanings] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  function handleSearchSubmit(word) {
    setWord(word);
    setIsLoaded(true);
  }

  React.useEffect(() => {
    if (!isLoaded) return;

    async function fetchMeaning(dictionaryAPI) {
      const response = await fetch(dictionaryAPI);
      const json = await response.json();
      setWordMeanings(json);
    }
    fetchMeaning(DICTIONARY_API + word);
  }, [isLoaded, word]);

  return (
    <>
      <SearchInput onSubmit={handleSearchSubmit} />
      {wordMeanings?.map((wordMeaning, index) => {
        const { sourceUrls } = wordMeaning;
        return (
          <div key={index}>
            <SearchedWord {...wordMeaning} />
            <Meaning {...wordMeaning} />
            <p className={styles.sourceUrl}>
              <span>Source:</span> {sourceUrls[0]}
              <a target="_blank" href={sourceUrls}>
                <ExternalLink />
              </a>
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Dictionary;
