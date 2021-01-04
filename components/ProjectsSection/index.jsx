import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Projects.module.css";
import taskListLogo from "../../public/taskListLogo.png";
import shapeClassifierLogo from "../../public/shapeClassIcon.svg";

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
        <h2 className={styles.title + " sectionSubtitle"}>
          {t("projectsTitle")}
        </h2>
        <p className={styles.subtitle + " sectionParagraph"}>
          {t("projectsSubtitle")}
        </p>
      </div>
      <div className={styles.projectsDiv}>
        <div className={styles.projectCard + " contactForm"}>
          <img src={taskListLogo} alt="Logo" className={styles.cardImg} />
          <h3 className={styles.projectName}>Share List</h3>
          <button
            className={styles.projectBtn}
            onClick={() =>
              window.open("https://tasklist-19334.web.app/", "target: blank")
            }
          >
            {t("projectBtnLabel")}
          </button>
        </div>
        <div className={styles.projectCard + " contactForm"}>
          <img
            src={shapeClassifierLogo}
            alt="Logo"
            className={styles.cardImg}
          />
          <h3 className={styles.projectName}>Shape Classifier</h3>
          <button
            className={styles.projectBtn}
            onClick={() =>
              window.open(
                "https://lnardon.github.io/ShapeClassifier/",
                "target: blank"
              )
            }
          >
            {t("projectBtnLabel")}
          </button>
        </div>
        <div className={styles.projectCard + " contactForm"}>
          <img
            src={
              "https://www.flaticon.com/svg/static/icons/svg/2922/2922888.svg"
            }
            alt="Logo"
            className={styles.cardImg}
          />
          <h3 className={styles.projectName}>3D Credit Card</h3>
          <button
            className={styles.projectBtn}
            onClick={() =>
              window.open(
                "https://lnardon.github.io/3DCreditCard/",
                "target: blank"
              )
            }
          >
            {t("projectBtnLabel")}
          </button>
        </div>
        <div className={styles.projectCard + " contactForm"}>
          <img
            src={
              "https://raw.githubusercontent.com/lnardon/PersonalWebsite/master/public/images/eu.png?token=AKMS2QAKANQVTB5CSZGQMFK77QDB2"
            }
            alt="Logo"
            className={styles.cardImg}
          />
          <h3 className={styles.projectName}>Lucas Nardon</h3>
          <button
            className={styles.projectBtn}
            onClick={() =>
              window.open(
                "https://personalwebsite-5d16b.web.app/",
                "target: blank"
              )
            }
          >
            {t("projectBtnLabel")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
