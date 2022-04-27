import axios from "axios";

const instance = axios.create({
  baseURL: "https://doimo.herokuapp.com/api",
});

export default instance;
