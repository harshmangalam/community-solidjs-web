import axios from "axios";

const fetchTags = async () => {
  return axios.get("/tags");
};

const fetchTagDetail = async (tagId: string) => {
  return axios.get(`/tags/${tagId}`);
};

export { fetchTags,fetchTagDetail };
