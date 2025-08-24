import ThemeProvider from "@/components/App/ThemeProvider";
import Header from "@components/Header";

import styles from "./App.module.css";
import Dictionary from "../Dictionary";

function App() {
  return (
    <ThemeProvider>
      <div className={styles.App}>
        <Header />
        <div className={styles.dictionary}>
          <Dictionary />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
