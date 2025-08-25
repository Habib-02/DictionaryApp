import styles from "./Footer.module.css";

import { ExternalLink } from "lucide-react";

function Footer({ sourceUrls }) {
  return (
    <div className={styles.sourceUrl}>
      <span>Source:</span>
      <a target="_blank" href={sourceUrls[0]} className={styles.sourceLink}>
        {sourceUrls[0]}
        <ExternalLink />
      </a>
    </div>
  );
}

export default Footer;
