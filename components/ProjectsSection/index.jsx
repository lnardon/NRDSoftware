import { useTranslation } from "react-i18next";

import styles from "./Projects.module.css";
import AnimatedOnViewport from "../../HOC/AnimatedOnViewport";
import { projects } from "./projects";
import ProjectCard from "../ProjectCard";
import { slideLeftAnimation } from "../../animations/slideLeft";
import { slideRightAnimation } from "../../animations/slideRight";

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
        <h2 className={styles.title + " sectionSubtitle"}>
          <AnimatedOnViewport
            variants={slideLeftAnimation}
            renderProps={() => t("projectsTitle")}
          />
        </h2>
        <p className={styles.subtitle + " sectionParagraph"}>
          <AnimatedOnViewport
            variants={slideRightAnimation}
            renderProps={() => t("projectsSubtitle")}
          />
        </p>
      </div>

      <div className={styles.projectsDiv}>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={project.name}
              project={project}
              label={t("projectBtnLabel")}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsSection;
