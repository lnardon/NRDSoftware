import { useState } from "react";
import styles from "./ContactSection.module.css";
import { useTranslation } from "react-i18next";

export default function ContactSection({}) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async () => {
    let response = await fetch(
      "https://nrdsoftware.vercel.app/api/sendMessage",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      }
    );
    console.log(response);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> {t("contactTitle")}</h1>
      <span className={styles.separator}></span>
      <div className={styles.formDiv}>
        <div className={styles.inputDiv}>
          <label htmlFor="">{t("contactLabel1")}</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
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
    </div>
  );
}
