import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:6060/v1",
});

export default api;
