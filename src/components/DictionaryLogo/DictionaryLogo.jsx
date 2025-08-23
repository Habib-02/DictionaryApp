import styles from "./DictionaryLogo.module.css";
import Logo from "@/assets/images/logo.svg";

function DictionaryLogo() {
  return (
    <div className={styles.logo}>
      <img src={Logo} alt="Dictionary Logo" />
    </div>
  );
}

export default DictionaryLogo;
