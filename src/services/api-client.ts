import axios from "axios";

const API_KEY = "221443b1e41c4d63ae899493147a8ee0";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API_KEY,
  },
});
