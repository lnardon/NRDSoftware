import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Section2.module.css";
import launchImage from "../../public/launch.svg";

function Section2() {
  const { t } = useTranslation();

  return (
    <div className="section1">
      <div className="sectionTitleDiv">
        <h2 className="sectionSubtitle">{t("section3Title")}</h2>
        <p className="sectionParagraph">{t("section3Subtitle")}</p>
      </div>
      <img
        src={launchImage}
        alt="Illustration"
        className="section1Illustration"
      />
    </div>
  );
}

export default Section2;
