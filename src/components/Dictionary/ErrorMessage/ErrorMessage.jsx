import styles from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <div className={styles.errorMessage}>
      <div className={styles.emoji}>😕</div>
      <p>No Definitions Found</p>
      <p className={styles.message}>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

export default ErrorMessage;
