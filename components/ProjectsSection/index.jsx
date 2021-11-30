import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

import styles from "./Projects.module.css";
import { projects } from "./projects";
import { slideLeftAnimation } from "../../animations/slideLeft";
import { slideRightAnimation } from "../../animations/slideRight";

const squareVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
        <motion.div
          initial="hidden"
          animate={controls}
          variants={slideLeftAnimation}
        >
          <h2 className={styles.title + " sectionSubtitle"}>
            {t("projectsTitle")}
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={slideRightAnimation}
        >
          <p className={styles.subtitle + " sectionParagraph"}>
            {t("projectsSubtitle")}
          </p>
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div className={styles.projectsDiv}>
          {projects.map((project) => {
            return (
              <div className={styles.projectCard}>
                <img
                  src={project.image}
                  alt="Logo"
                  className={styles.cardImg}
                />
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
      </motion.div>
    </div>
  );
}

export default ProjectsSection;
