import Head from "next/head";
import '../i18n';
import { useTranslation } from "react-i18next";
import styles from "../styles/Home.module.css";

export default function Home() {
  const {t, i18n } = useTranslation();
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('head')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <h1>{t('title')}</h1>
        <select
          onChange={changeLanguage}
          defaultValue={i18n.resolvedLanguage}
          className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
        >
          <option className="text-black" value="en">
            EN
          </option>
          <option className="text-black" value="de">
            DE
          </option>
        </select>
      </body>
    </div>
  );
}
