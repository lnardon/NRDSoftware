import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Section1.module.css";
import uiImage from "../../public/ui.svg";
import starImage from "../../public/star.svg";

function Section1() {
  const { t } = useTranslation();

  return (
    <div className={styles.sectionContainer}>
      <section className={styles.div}>
        <div className={styles.sectionTitleDiv}>
          <h2 className={styles.sectionSubtitle}>{t("section1Title")}</h2>
          <p className={styles.sectionParagraph}>{t("section1Subtitle")}</p>
        </div>
        <img
          src={uiImage}
          alt="Illustration"
          className="section1Illustration"
        />
      </section>
      <section className={styles.div2}>
        <div className={styles.sectionTitleDiv2}>
          <h2 className={styles.sectionSubtitle2}>{t("section2Title")}</h2>
          <p className={styles.sectionParagraph2}>{t("section2Subtitle")}</p>
        </div>
        <img
          src={starImage}
          alt="Illustration"
          className="section1Illustration"
        />
      </section>
    </div>
  );
}

export default Section1;
