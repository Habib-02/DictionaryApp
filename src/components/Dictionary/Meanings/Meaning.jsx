import styles from "./Meaning.module.css";

function Meaning({ meanings }) {
  return (
    <div className={styles.meaningsSection}>
      {meanings.map((meaning, index) => {
        const { partOfSpeech, definitions, synonyms } = meaning;
        return (
          <div key={index}>
            <h2>
              {partOfSpeech}
              <span className="decoration"></span>
            </h2>
            <h3>Meaning</h3>
            <ul>
              {definitions.map((option, index) => (
                <div key={index}>
                  <li>{option.definition}</li>
                  {option.example && (
                    <p className={styles.example}>"{option.example}"</p>
                  )}
                </div>
              ))}
            </ul>
            {synonyms.length > 0 && (
              <div className={styles.synonyms}>
                {" "}
                Synonyms: <span>{synonyms.join(", ")}</span>{" "}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
