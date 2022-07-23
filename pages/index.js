import Head from "next/head";
import "../i18n";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <>
      {domLoaded && (
      <div class='container'>
        <Head>
          <title>{t("head")}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <h1>{t("title")}</h1>
          <select
            onChange={changeLanguage}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
            defaultValue={i18n.resolvedLanguage}
          >
            <option className="text-black" value="en">
              EN
            </option>
            <option className="text-black" value="de">
              DE
            </option>
          </select>
      </div>
      )}
    </>
  );
}
