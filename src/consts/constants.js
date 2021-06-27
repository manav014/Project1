const serverURL = "http://127.0.0.1:8000";

const coreApiURL = "/core";
const accountsApiURL = "/accounts";

export const core_endpoint = `${serverURL}${coreApiURL}`;
export const accounts_endpoint = `${serverURL}${accountsApiURL}`;
export const userDetailsURL = `${accounts_endpoint}/account_details/`;
export const addressURL = `${core_endpoint}/address/`;
export const addressSlugURL = (slug) => `${addressURL}${slug}/`;
export const favouriteURL = `${accounts_endpoint}/favouriteshop/`;
export const favouriteSlugURL = (slug) => `${favouriteURL}${slug}/`;
export const allShopsURL = `${core_endpoint}/allshops/`;
export const ProductSearchWithCategory = (sslug, cslug) =>
  `${core_endpoint}/products/${sslug}/${cslug}/`;
