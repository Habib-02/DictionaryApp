import React from "react";

import SearchedWord from "@/components/Dictionary/SearchedWord";
import SearchInput from "@components/Dictionary/SearchInput";
import { DICTIONARY_API } from "@/constants";
import Footer from "@components/Dictionary/Footer";
import ErrorMessage from "@components/Dictionary/ErrorMessage";
import Meaning from "@components/Dictionary/Meanings";
import Spinner from "./Spinner";

function Dictionary() {
  const [word, setWord] = React.useState("");
  const [wordMeanings, setWordMeanings] = React.useState(null);
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  function handleSearchSubmit(word) {
    setWord(word);
  }

  React.useEffect(() => {
    if (!word) return;

    async function fetchMeaning(dictionaryAPI) {
      setIsLoading(true);
      setWordMeanings(null);
      try {
        const response = await fetch(dictionaryAPI);
        if (!response.ok) throw new Error("Invalid word");
        const json = await response.json();
        setWordMeanings(json);
        setIsError(false);
        setIsLoading(false);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMeaning(DICTIONARY_API + word);
  }, [word]);

  return (
    <>
      <SearchInput onSubmit={handleSearchSubmit} />
      {isLoading && <Spinner />}
      {isError && <ErrorMessage />}
      {!isError &&
        wordMeanings?.map((wordMeaning, index) => {
          const { sourceUrls } = wordMeaning;
          return (
            <div key={index}>
              <SearchedWord {...wordMeaning} />
              <Meaning {...wordMeaning} />
              <Footer sourceUrls={sourceUrls} />
            </div>
          );
        })}
    </>
  );
}

export default Dictionary;
