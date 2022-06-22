import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const loginErrorFields = {
  email: "",
  password: "",
};

export { loginSchema, loginErrorFields };
