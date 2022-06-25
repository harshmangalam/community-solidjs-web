import axios from "axios";

const fetchArticles = async () => {
  return axios.get("/articles");
};

export { fetchArticles };
