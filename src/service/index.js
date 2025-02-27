import axios from "axios";
import { API_URL } from "../constants/api-url";
// import { TOKEN_KEY } from "../constants/constant";

const apiHeaders = {
  baseURL: `${API_URL}`,
  headers: {
    Accept: "application/json",
    Authorization: "",
  },
};

const apiConfig = () => {
  // const token = JSON.parse(window.localStorage.getItem(TOKEN_KEY));

  // apiHeaders.headers["Authorization"] = `Bearer ${token}`;
  return apiHeaders;
};

const responseBody = (response) => response.data;

export const requestType = {
  get: (url) => axios.get(url, apiConfig()).then(responseBody),
  post: (url, body) => axios.post(url, body, apiConfig()).then(responseBody),
  put: (url, body) => axios.put(url, body, apiConfig()).then(responseBody),
  del: (url, body) =>
    axios
      .delete(apiConfig().baseURL + url, {
        headers: apiConfig().headers,
        data: body,
      })
      .then(responseBody),
};
