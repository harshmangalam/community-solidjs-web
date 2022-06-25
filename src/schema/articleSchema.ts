import * as yup from "yup";

const createArticleSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  coverImage: yup.string(),
  tags: yup.array().required().min(1).max(6),
});

const createArticleErrorField = {
  title: "",
  content: "",
  tags: "",
};

export { createArticleSchema, createArticleErrorField };
