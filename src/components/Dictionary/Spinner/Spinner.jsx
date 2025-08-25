import { Loader } from "lucide-react";

import styles from "./Spinner.module.css";

function Spinner({ size = 32 }) {
  return (
    <span className={styles.spinner}>
      <Loader size={size} />
    </span>
  );
}

export default Spinner;
