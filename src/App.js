// in src/App.js
import * as React from "react";
import { useState, useEffect } from "react";
import { Admin, Resource } from "react-admin";

import dataProviderFactory from "./dataProvider";
import polyglotI18nProvider from "ra-i18n-polyglot";
import vietnamMessage from "./i18n/vi";
import { Layout } from "./layout";

// Business
// Ges import
import rates from "./business/ges/rate";
// import history from "./business/ges/history";
import gifts from "./business/ges/gifts";
// Multi Language
const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale === "en") {
    return import("./i18n/en").then((messages) => messages.default);
  }
  // Always fallback on vietnam
  return vietnamMessage;
}, "vi");

const App = () => {
  const [dataProvider, setDataProvider] = useState(null);

  useEffect(() => {
    let restoreFetch;
    const fetchDataProvider = async () => {
      const dataProviderInstance = await dataProviderFactory(
        process.env.REACT_APP_DATA_PROVIDER
      );
      setDataProvider(
        // GOTCHA: dataProviderInstance can be a function
        () => dataProviderInstance
      );
    };
    fetchDataProvider();
    // setAppConfig();
    return restoreFetch;
  }, []);

  if (!dataProvider) {
    return (
      <div className="loader-container">
        <div className="loader">Loading...</div>
      </div>
    );
  }
  return (
    <Admin
      key="admin"
      layout={Layout}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
    >
      <Resource key="ges-gifts" name="gm/admin/gifts" {...gifts} />
      <Resource key="ges-rate" name="gm/admin/rates" {...rates} />
    </Admin>
  );
};
export default App;
