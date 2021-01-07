import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Section2.module.css";
import Triangle1 from "../../public/tri1.svg";
import Triangle2 from "../../public/tri2.svg";
import Triangle3 from "../../public/tri3.svg";

function Section2() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.cardContainer}>
          <img
            src={Triangle1}
            alt="Illustration"
            className={styles.section1Illustration + " sectionImage"}
          />
          <h1 className={styles.detailTitle}>{t("detailCard1")}</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src={Triangle2}
            alt="Illustration"
            className={styles.section1Illustration + " sectionImage"}
          />
          <h1 className={styles.detailTitle}>{t("detailCard2")}</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src={Triangle3}
            alt="Illustration"
            className={styles.section1Illustration + " sectionImage"}
          />
          <h1 className={styles.detailTitle}>{t("detailCard3")}</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src={Triangle3}
            alt="Illustration"
            className={styles.section1Illustration + " sectionImage"}
          />
          <h1 className={styles.detailTitle}>{t("detailCard1")}</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src={Triangle1}
            alt="Illustration"
            className={styles.section1Illustration + " sectionImage"}
          />
          <h1 className={styles.detailTitle}>{t("detailCard1")}</h1>
        </div>
        <div className={styles.cardContainer}>
          <img
            src={Triangle2}
            alt="Illustration"
            className={styles.section1Illustration + " sectionImage"}
          />
          <h1 className={styles.detailTitle}>{t("detailCard1")}</h1>
        </div>
      </div>
    </div>
  );
}

export default Section2;
