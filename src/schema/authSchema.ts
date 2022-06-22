import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const loginErrorFields = {
  email: "",
  password: "",
};

const signupSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const signupErrorFields = {
  name: "",
  email: "",
  password: "",
};
export { loginSchema, loginErrorFields, signupSchema, signupErrorFields };
