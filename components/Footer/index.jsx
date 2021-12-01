import { slideLeftAnimation } from "../../animations/slideLeft";
import AnimatedOnViewport from "../../HOC/AnimatedOnViewport";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <AnimatedOnViewport
        divStyles={{ overflow: "hidden" }}
        variants={slideLeftAnimation}
        renderProps={() => (
          <div className={styles.textDiv}>
            <h4>{`NRD Software © ${new Date().getFullYear()}`}</h4>
          </div>
        )}
      />
    </div>
  );
}

export default Footer;
