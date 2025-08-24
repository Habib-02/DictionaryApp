import AudioPlayer from "@components/Dictionary/SearchedWord/AudioPlayer";
import styles from "./SearchedWord.module.css";

function SearchedWord(props) {
  const { word, phonetic, phonetics } = props;
  return (
    <section className={styles.searchedWordSection}>
      <div className={styles.searchedWord}>
        <h1>{word}</h1>
        <span>{phonetic}</span>
      </div>
      <AudioPlayer phonetics={phonetics} />
    </section>
  );
}

export default SearchedWord;
