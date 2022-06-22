import axios from "axios";

type LoginPayload = {
  email: string;
  password: string;
};
const login = async (payload: LoginPayload) => {
  return axios.post("/auth/login", payload);
};

type SignupPayload = {
  name: string;
  email: string;
  password: string;
};
const signup = async (payload: SignupPayload) => {
  return axios.post("/auth/signup", payload);
};

export { login, signup };
