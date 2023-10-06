import axios from "axios";

axios.defaults.baseURL = "https://fuckdigdinso-5ce81012fee7.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
