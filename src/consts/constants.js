const serverURL = "http://127.0.0.1:8000";

const coreApiURL = "/core";
const accountsApiURL = "/accounts";
const cartApiURL = "/cart";

export const core_endpoint = `${serverURL}${coreApiURL}`;
export const accounts_endpoint = `${serverURL}${accountsApiURL}`;
export const userDetailsURL = `${accounts_endpoint}/account_details/`;
export const addressURL = `${core_endpoint}/address/`;
export const addressSlugURL = (slug) => `${addressURL}${slug}/`;
export const favouriteURL = `${accounts_endpoint}/favouriteshop/`;
export const favouriteSlugURL = (slug) => `${favouriteURL}${slug}/`;
export const allShopsURL = `${core_endpoint}/allshops/`;
export const removeFromCartURL = `${core_endpoint}${cartApiURL}/remove/`;
export const cartDetailsURL = `${core_endpoint}${cartApiURL}/`;
export const addToCartURL = `${core_endpoint}${cartApiURL}/add/`;
export const authLoginURL = `${accounts_endpoint}/login/`;
export const registerLoginURL = `${serverURL}${accountsApiURL}/register/`;

export const ProductSearchWithCategory = (sslug, cslug) =>
  `${core_endpoint}/products/${sslug}/${cslug}/`;
