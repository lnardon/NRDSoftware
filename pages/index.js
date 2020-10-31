import Head from "next/head";
import { useEffect } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import useOnScreen from "reactanimationonscreen";

import translations from "../translations.json";
import scrollIcon from "../public/scrollIcon.svg";
import uiImage from "../public/ui.svg";
import starImage from "../public/star.svg";
import taskListLogo from "../public/taskListLogo.png";
import coinHUBLogo from "../public/coinHUBLogo.png";

i18n.use(initReactI18next).init({
  resources: translations,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    const animations = useOnScreen(
      ["sectionSubtitle", "sectionParagraph"],
      ["slideLeft", "slideRight"],
      0,
      true
    );
  }, []);

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
      <div className="splashDiv">
        <svg
          width="660"
          height="263"
          viewBox="0 0 660 263"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M270.286 108H253.186L201.736 30.1501V108H184.636V3.6001H201.736L253.186 81.3001V3.6001H270.286V108Z"
            stroke="#FAFAFA"
            stroke-width="6"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M346.891 108L322.891 66.3001H309.841V108H292.741V3.7501H328.741C336.741 3.7501 343.491 5.15009 348.991 7.95009C354.591 10.7501 358.741 14.5001 361.441 19.2001C364.241 23.9001 365.641 29.1501 365.641 34.9501C365.641 41.7501 363.641 47.9501 359.641 53.5501C355.741 59.0501 349.691 62.8001 341.491 64.8001L367.291 108H346.891ZM309.841 52.6501H328.741C335.141 52.6501 339.941 51.0501 343.141 47.8501C346.441 44.6501 348.091 40.3501 348.091 34.9501C348.091 29.5501 346.491 25.3501 343.291 22.3501C340.091 19.2501 335.241 17.7001 328.741 17.7001H309.841V52.6501Z"
            stroke="#FAFAFA"
            stroke-width="6"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M421.567 3.7501C432.667 3.7501 442.367 5.9001 450.667 10.2001C459.067 14.4001 465.517 20.5001 470.017 28.5001C474.617 36.4001 476.917 45.6501 476.917 56.2501C476.917 66.8501 474.617 76.0501 470.017 83.8501C465.517 91.6501 459.067 97.6501 450.667 101.85C442.367 105.95 432.667 108 421.567 108H387.517V3.7501H421.567ZM421.567 94.0501C433.767 94.0501 443.117 90.7501 449.617 84.1501C456.117 77.5501 459.367 68.2501 459.367 56.2501C459.367 44.1501 456.117 34.7001 449.617 27.9001C443.117 21.1001 433.767 17.7001 421.567 17.7001H404.617V94.0501H421.567Z"
            stroke="#FAFAFA"
            stroke-width="6"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M39.9086 259.05C32.9086 259.05 26.6086 257.85 21.0086 255.45C15.4086 252.95 11.0086 249.45 7.80861 244.95C4.60861 240.45 3.00861 235.2 3.00861 229.2H21.3086C21.7086 233.7 23.4586 237.4 26.5586 240.3C29.7586 243.2 34.2086 244.65 39.9086 244.65C45.8086 244.65 50.4086 243.25 53.7086 240.45C57.0086 237.55 58.6586 233.85 58.6586 229.35C58.6586 225.85 57.6086 223 55.5086 220.8C53.5086 218.6 50.9586 216.9 47.8586 215.7C44.8586 214.5 40.6586 213.2 35.2586 211.8C28.4586 210 22.9086 208.2 18.6086 206.4C14.4086 204.5 10.8086 201.6 7.80861 197.7C4.80861 193.8 3.30861 188.6 3.30861 182.1C3.30861 176.1 4.80861 170.85 7.80861 166.35C10.8086 161.85 15.0086 158.4 20.4086 156C25.8086 153.6 32.0586 152.4 39.1586 152.4C49.2586 152.4 57.5086 154.95 63.9086 160.05C70.4086 165.05 74.0086 171.95 74.7086 180.75H55.8086C55.5086 176.95 53.7086 173.7 50.4086 171C47.1086 168.3 42.7586 166.95 37.3586 166.95C32.4586 166.95 28.4586 168.2 25.3586 170.7C22.2586 173.2 20.7086 176.8 20.7086 181.5C20.7086 184.7 21.6586 187.35 23.5586 189.45C25.5586 191.45 28.0586 193.05 31.0586 194.25C34.0586 195.45 38.1586 196.75 43.3586 198.15C50.2586 200.05 55.8586 201.95 60.1586 203.85C64.5586 205.75 68.2586 208.7 71.2586 212.7C74.3586 216.6 75.9086 221.85 75.9086 228.45C75.9086 233.75 74.4586 238.75 71.5586 243.45C68.7586 248.15 64.6086 251.95 59.1086 254.85C53.7086 257.65 47.3086 259.05 39.9086 259.05Z"
            stroke="#FAFAFA"
            stroke-width="6"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M131.936 259.35C124.136 259.35 117.086 257.6 110.786 254.1C104.486 250.5 99.5359 245.5 95.9359 239.1C92.3359 232.6 90.5359 225.1 90.5359 216.6C90.5359 208.2 92.386 200.75 96.086 194.25C99.786 187.75 104.836 182.75 111.236 179.25C117.636 175.75 124.786 174 132.686 174C140.586 174 147.736 175.75 154.136 179.25C160.536 182.75 165.586 187.75 169.286 194.25C172.986 200.75 174.836 208.2 174.836 216.6C174.836 225 172.936 232.45 169.136 238.95C165.336 245.45 160.136 250.5 153.536 254.1C147.036 257.6 139.836 259.35 131.936 259.35ZM131.936 244.5C136.336 244.5 140.436 243.45 144.236 241.35C148.136 239.25 151.286 236.1 153.686 231.9C156.086 227.7 157.286 222.6 157.286 216.6C157.286 210.6 156.136 205.55 153.836 201.45C151.536 197.25 148.486 194.1 144.686 192C140.886 189.9 136.786 188.85 132.386 188.85C127.986 188.85 123.886 189.9 120.086 192C116.386 194.1 113.436 197.25 111.236 201.45C109.036 205.55 107.936 210.6 107.936 216.6C107.936 225.5 110.186 232.4 114.686 237.3C119.286 242.1 125.036 244.5 131.936 244.5Z"
            stroke="#FAFAFA"
            stroke-width="6"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M226.39 189.3H211.09V258H193.84V189.3H184.09V175.35H193.84V169.5C193.84 160 196.34 153.1 201.34 148.8C206.44 144.4 214.39 142.2 225.19 142.2V156.45C219.99 156.45 216.34 157.45 214.24 159.45C212.14 161.35 211.09 164.7 211.09 169.5V175.35H226.39V189.3Z"
            stroke="#FAFAFA"
            stroke-width="6"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M261.495 189.3V235.05C261.495 238.15 262.195 240.4 263.595 241.8C265.095 243.1 267.595 243.75 271.095 243.75H281.595V258H268.095C260.395 258 254.495 256.2 250.395 252.6C246.295 249 244.245 243.15 244.245 235.05V189.3H234.495V175.35H244.245V154.8H261.495V175.35H281.595V189.3H261.495Z"
            stroke="#FAFAFA"
            stroke-width="6"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M408.355 175.35L382.705 258H364.705L348.055 196.95L331.405 258H313.405L287.605 175.35H305.005L322.255 241.8L339.805 175.35H357.655L374.455 241.5L391.555 175.35H408.355Z"
            stroke="#FAFAFA"
            stroke-width="6"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M415.435 216.3C415.435 208 417.135 200.65 420.535 194.25C424.035 187.85 428.735 182.9 434.635 179.4C440.635 175.8 447.235 174 454.435 174C460.935 174 466.585 175.3 471.385 177.9C476.285 180.4 480.185 183.55 483.085 187.35V175.35H500.335V258H483.085V245.7C480.185 249.6 476.235 252.85 471.235 255.45C466.235 258.05 460.535 259.35 454.135 259.35C447.035 259.35 440.535 257.55 434.635 253.95C428.735 250.25 424.035 245.15 420.535 238.65C417.135 232.05 415.435 224.6 415.435 216.3ZM483.085 216.6C483.085 210.9 481.885 205.95 479.485 201.75C477.185 197.55 474.135 194.35 470.335 192.15C466.535 189.95 462.435 188.85 458.035 188.85C453.635 188.85 449.535 189.95 445.735 192.15C441.935 194.25 438.835 197.4 436.435 201.6C434.135 205.7 432.985 210.6 432.985 216.3C432.985 222 434.135 227 436.435 231.3C438.835 235.6 441.935 238.9 445.735 241.2C449.635 243.4 453.735 244.5 458.035 244.5C462.435 244.5 466.535 243.4 470.335 241.2C474.135 239 477.185 235.8 479.485 231.6C481.885 227.3 483.085 222.3 483.085 216.6Z"
            stroke="#FAFAFA"
            stroke-width="6"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M539.895 187.35C542.395 183.15 545.695 179.9 549.795 177.6C553.995 175.2 558.945 174 564.645 174V191.7H560.295C553.595 191.7 548.495 193.4 544.995 196.8C541.595 200.2 539.895 206.1 539.895 214.5V258H522.795V175.35H539.895V187.35Z"
            stroke="#FAFAFA"
            stroke-width="6"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M656.113 214.65C656.113 217.75 655.913 220.55 655.513 223.05H592.363C592.863 229.65 595.313 234.95 599.713 238.95C604.113 242.95 609.513 244.95 615.913 244.95C625.113 244.95 631.613 241.1 635.413 233.4H653.863C651.363 241 646.813 247.25 640.213 252.15C633.713 256.95 625.613 259.35 615.913 259.35C608.013 259.35 600.913 257.6 594.613 254.1C588.413 250.5 583.513 245.5 579.913 239.1C576.413 232.6 574.663 225.1 574.663 216.6C574.663 208.1 576.363 200.65 579.763 194.25C583.263 187.75 588.113 182.75 594.313 179.25C600.613 175.75 607.813 174 615.913 174C623.713 174 630.663 175.7 636.763 179.1C642.863 182.5 647.613 187.3 651.013 193.5C654.413 199.6 656.113 206.65 656.113 214.65ZM638.263 209.25C638.163 202.95 635.913 197.9 631.513 194.1C627.113 190.3 621.663 188.4 615.163 188.4C609.263 188.4 604.213 190.3 600.013 194.1C595.813 197.8 593.313 202.85 592.513 209.25H638.263Z"
            stroke="#FAFAFA"
            stroke-width="6"
            mask="url(#path-1-outside-1)"
          />
        </svg>
        <h2 className="subtitle">{t("logoSubtitle")}</h2>
        <select
          className="languageSelect"
          name="language"
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="en">En-US</option>
          <option value="pt">Pt-BR</option>
        </select>
        <img src={scrollIcon} alt="Scroll" className="scrollIcon" />
      </div>

      <section className="section1 section">
        <div className="sectionTitleDiv">
          <h2 className="sectionSubtitle">{t("section1Title")}</h2>
          <p className="sectionParagraph">{t("section1Subtitle")}</p>
        </div>
        <img
          src={uiImage}
          alt="Illustration"
          className="section1Illustration"
        />
      </section>

      <section className="section1 section">
        <div className="sectionTitleDiv">
          <h2 className="sectionSubtitle">{t("section2Title")}</h2>
          <p className="sectionParagraph">{t("section2Subtitle")}</p>
        </div>
        <img
          src={starImage}
          alt="Illustration"
          className="section1Illustration"
        />
      </section>

      <section className="section3">
        <div className="sectionTitleDiv">
          <h2 className="sectionSubtitle">{t("projectsTitle")}</h2>
          <p className="sectionParagraph">{t("projectsSubtitle")}</p>
        </div>
        <div className="projectsDiv">
          <div className="projectCard">
            <img src={taskListLogo} alt="Logo" />
            <h3 className="projectName">Share List</h3>
            <button
              className="projectBtn"
              onClick={() =>
                window.open("https://tasklist-19334.web.app/", "target: blank")
              }
            >
              {t("projectBtnLabel")}
            </button>
          </div>
          <div className="projectCard">
            <img src={coinHUBLogo} alt="Logo" />
            <h3 className="projectName">Coin HUB</h3>
            <button
              className="projectBtn"
              onClick={() =>
                window.open("https://tasklist-19334.web.app/", "target: blank")
              }
            >
              {t("projectBtnLabel")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
