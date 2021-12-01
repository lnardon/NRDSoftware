import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import AnimatedOnViewport from "../../HOC/AnimatedOnViewport";
import { slideUpAnimation } from "../../animations/slideUp";
import styles from "./ContactSection.module.css";

export default function ContactSection({}) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async () => {
    axios.post("https://petalite-shy-tendency.glitch.me/sendMessage", {
      name,
      email,
      message,
    });
  };

  return (
    <div className={styles.container}>
      <AnimatedOnViewport
        variants={slideUpAnimation}
        className={styles.container}
        renderProps={() => (
          <>
            <h1 className={styles.title}> {t("contactTitle")}</h1>
            <span className={styles.separator}></span>
            <div className={styles.formDiv + " contactForm"}>
              <div className={styles.inputDiv}>
                <label htmlFor="">{t("contactLabel1")}</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setName(e.target.value, () => {
                      alert("Hey");
                    })
                  }
                  value={name}
                />
              </div>
              <div className={styles.inputDiv}>
                <label htmlFor="">{t("contactLabel2")}</label>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className={styles.inputDiv}>
                <label htmlFor="">{t("contactLabel3")}</label>
                <textarea
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
              <button onClick={handleMessage}>{t("contactBtn")}</button>
            </div>
          </>
        )}
      />
    </div>
  );
}
