import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Section2.module.css";
import launchImage from "../../public/launch.svg";

function Section2() {
  const { t } = useTranslation();

  return (
    <div className={styles.sectionContainer}>
      <section className={styles.div}>
        <div className={styles.sectionTitleDiv}>
          <h2 className={styles.sectionSubtitle + " sectionSubtitle"}>
            {t("section3Title")}
          </h2>
          <p className={styles.sectionParagraph + " sectionParagraph"}>
            {t("section3Subtitle")}
          </p>
        </div>
        <img
          src={launchImage}
          alt="Illustration"
          className={styles.section1Illustration}
        />
      </section>
    </div>
  );
}

export default Section2;
