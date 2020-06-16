import axios from "axios";

const GITHUB_URL = "https://api.github.com";
const api = axios.create({ baseURL: GITHUB_URL, method: "GET" });

const GithubApi = {
  async getUser({ username }) {
    let result = await (await api("/users/" + username)).data;

    return result;
  },

  async getLanguages({ username, repo }) {
    let result = await (await api("/repos/" + username + "/" + repo + "/languages")).data;

    let languages = Object.entries(result).map((v, i) => ({ id: v[0], label: v[0], value: v[1] }));

    return languages;
  },
  async getRepos({ username }) {
    let result = await (await api("/users/" + username + "/repos")).data;
    return result;
  },
};

export default GithubApi;
