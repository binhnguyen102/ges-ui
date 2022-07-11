import { fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const REST_SERVER_URI = process.env.REACT_APP_REST_SERVER_URI || "http://localhost:7979/ges/api/v1";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  options.headers.set('X-Access-Token', localStorage.getItem('access_token'));
  options.headers.set('timezone', timezone);
  options.headers.set('lang', localStorage.getItem('lang'));
  options.headers.set('X-Tier-Type', localStorage.getItem('xTierType'));
  options.headers.set('X-User-Type', localStorage.getItem('xUserType'));
  options.headers.set('dataTag', localStorage.getItem('dataTag') || "data-of-user");
  return fetchUtils.fetchJson(url, options);
};

const restProvider = jsonServerProvider(REST_SERVER_URI, httpClient);

const delayedDataProvider = new Proxy(restProvider, {
    get: (target, name, self) =>
        name === 'then'
            ? self
            : (resource, params) =>
                  new Promise(resolve =>
                      setTimeout(
                          () => resolve(restProvider[name](resource, params)),
                          500
                      )
                  ),
});

export default delayedDataProvider;
