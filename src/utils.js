import axios from "axios";
import { core_endpoint, accounts_endpoint } from "./constants";

export const authCoreAxios = axios.create({
  baseURL: core_endpoint,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const authAccountsAxios = axios.create({
  baseURL: accounts_endpoint,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
