import axios from "axios";

type CreateArticle = {
  title: string;
  content: string;
  tags: string[];
  coverImage?: string;
};
const fetchArticles = async () => {
  return axios.get("/articles");
};

const fetchArticleDetail = async (articleId: string) => {
  return axios.get(`/articles/${articleId}`);
};

const createArticle = async (data: CreateArticle) => {
  return axios.post("/articles", data);
};

export { fetchArticles, fetchArticleDetail, createArticle };
