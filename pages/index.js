import Head from "next/head";
import { useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "../translations.json";
import SplashSection from "../components/Splash";
import Section1 from "../components/Section1";
import ProjectsSection from "../components/ProjectsSection";
import Section2 from "../components/Section2";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

i18n.use(initReactI18next).init({
  resources: translations,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>NRD Software</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="../static/home.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SplashSection i18n={i18n} />
      <Section1 />
      <ProjectsSection />
      {/* <Section2 /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
