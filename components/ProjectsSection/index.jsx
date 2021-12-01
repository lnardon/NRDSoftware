import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

import styles from "./Projects.module.css";
import { projects } from "./projects";
import { slideLeftAnimation } from "../../animations/slideLeft";
import { slideRightAnimation } from "../../animations/slideRight";

const variants = {
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.075 },
  }),
  hidden: { opacity: 0, y: 100 },
};

function ProjectsSection() {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
        <h2 className={styles.title + " sectionSubtitle"}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={slideLeftAnimation}
          >
            {t("projectsTitle")}
          </motion.div>
        </h2>
        <p className={styles.subtitle + " sectionParagraph"}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={slideRightAnimation}
          >
            {t("projectsSubtitle")}
          </motion.div>
        </p>
      </div>

      <div className={styles.projectsDiv}>
        {projects.map((project, index) => {
          return (
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants}
              custom={index}
              className={styles.projectCard}
            >
              <img src={project.image} alt="Logo" className={styles.cardImg} />
              <h3 className={styles.projectName}>{project.name}</h3>
              <button
                className={styles.projectBtn}
                onClick={() => window.open(project.link, "target: blank")}
              >
                {t("projectBtnLabel")}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsSection;
