import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Projects.module.css";
import { projects } from "./projects";

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
        {projects.map((project) => {
          return (
            <div className={styles.projectCard + " contactForm"}>
              <img src={project.image} alt="Logo" className={styles.cardImg} />
              <h3 className={styles.projectName}>{project.name}</h3>
              <button
                className={styles.projectBtn}
                onClick={() => window.open(project.link, "target: blank")}
              >
                {t("projectBtnLabel")}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsSection;
