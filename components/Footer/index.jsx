import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.textDiv}>
        <h4>{`NRD Software © ${new Date().getFullYear()}`}</h4>
      </div>
    </div>
  );
}

export default Footer;
