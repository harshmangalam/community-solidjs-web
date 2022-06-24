import axios from "axios";

const fetchTags = async () => {
  return axios.get("/tags");
};

export { fetchTags };
