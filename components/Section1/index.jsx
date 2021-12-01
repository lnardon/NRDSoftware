import { useTranslation } from "react-i18next";

import AnimatedOnViewport from "../../HOC/AnimatedOnViewport";
import { slideLeftAnimation } from "../../animations/slideLeft";
import { slideRightAnimation } from "../../animations/slideRight";
import { slideUpAnimation } from "../../animations/slideUp";
import styles from "./Section1.module.css";
import uiImage from "../../public/ui.svg";
import starImage from "../../public/star.svg";

function Section1() {
  const { t } = useTranslation();

  return (
    <div className={styles.sectionContainer}>
      <section className={styles.div}>
        <div className={styles.sectionTitleDiv}>
          <AnimatedOnViewport
            variants={slideRightAnimation}
            renderProps={() => (
              <h2 className={styles.sectionSubtitle}>{t("section1Title")}</h2>
            )}
          />
          <AnimatedOnViewport
            variants={slideRightAnimation}
            renderProps={() => (
              <p className={styles.sectionParagraph}>{t("section1Subtitle")}</p>
            )}
          />
        </div>
        <AnimatedOnViewport
          variants={slideUpAnimation}
          className="section1Illustration"
          renderProps={() => (
            <img
              src={uiImage}
              alt="Illustration"
              className="section1Illustration sectionImage"
            />
          )}
        />
      </section>
      <section className={styles.div2}>
        <div className={styles.sectionTitleDiv}>
          <AnimatedOnViewport
            variants={slideLeftAnimation}
            className={styles.sectionSubtitle2}
            renderProps={() => (
              <h2 className={styles.sectionSubtitle2}>{t("section2Title")}</h2>
            )}
          />
          <AnimatedOnViewport
            variants={slideLeftAnimation}
            className={styles.sectionParagraph2}
            renderProps={() => (
              <p className={styles.sectionParagraph2}>
                {t("section2Subtitle")}
              </p>
            )}
          />
        </div>
        <AnimatedOnViewport
          variants={slideUpAnimation}
          className="section1Illustration"
          renderProps={() => (
            <img
              src={starImage}
              alt="Illustration"
              className="section1Illustration sectionImage"
            />
          )}
        />
      </section>
    </div>
  );
}

export default Section1;
