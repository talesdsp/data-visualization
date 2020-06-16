import axios from "axios";

const COVID_URL = "https://covid19.mathdro.id/api";

const api = axios.create({ baseURL: COVID_URL, method: "GET" });

const API = {
  getTotalCases: () => api(),
  getDailyCases: () => api("/daily"),
  getAllCountries: () => api("/countries"),
  getOneCountry: (country) => api("/countries/" + country),
};

export default API;
