import AnimatedOnViewport from "../../HOC/AnimatedOnViewport";
import { slideUpAnimation } from "../../animations/slideUp";
import styles from "../ProjectsSection/Projects.module.css";

function ProjectCard({ project, label, index }) {
  return (
    <AnimatedOnViewport
      variants={slideUpAnimation}
      custom={index}
      className={styles.cardContainer}
      renderProps={() => (
        <div className={styles.projectCard}>
          <img src={project.image} alt="Logo" className={styles.cardImg} />
          <h3 className={styles.projectName}>{project.name}</h3>
          <button
            className={styles.projectBtn}
            onClick={() => window.open(project.link, "target: blank")}
          >
            {label}
          </button>
        </div>
      )}
    />
  );
}

export default ProjectCard;
