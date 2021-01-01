import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Section1.module.css";
import uiImage from "../../public/ui.svg";
import starImage from "../../public/star.svg";

function Section1() {
  const { t } = useTranslation();

  return (
    <div>
      <section className="section1">
        <div className="sectionTitleDiv">
          <h2 className="sectionSubtitle">{t("section1Title")}</h2>
          <p className="sectionParagraph">{t("section1Subtitle")}</p>
        </div>
        <img
          src={uiImage}
          alt="Illustration"
          className="section1Illustration"
        />
      </section>
      <section className="section1">
        <div className="sectionTitleDiv">
          <h2 className="sectionSubtitle">{t("section2Title")}</h2>
          <p className="sectionParagraph">{t("section2Subtitle")}</p>
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
