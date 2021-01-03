import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Projects.module.css";
import taskListLogo from "../../public/taskListLogo.png";
import shapeClassifierLogo from "../../public/shapeClassIcon.svg";

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <div div className={styles.container}>
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
      </div>
    </div>
  );
}

export default ProjectsSection;
