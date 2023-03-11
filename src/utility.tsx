import axios from "axios";

export const tokenAxios = axios.create({
  baseURL: "https://motchamjing4.herokuapp.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    Authorization: `Token ${window.localStorage.getItem("loginToken")}`,
  },
});
tokenAxios.defaults.withCredentials = true;
tokenAxios.defaults.xsrfCookieName = "csrftoken";
tokenAxios.defaults.xsrfHeaderName = "X-CSRFToken";
