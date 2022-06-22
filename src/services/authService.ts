import axios from "axios";

type LoginPayload = {
  email: string;
  password: string;
};
const login = async (payload: LoginPayload) => {
  return axios.post("/auth/login", payload);
};

export { login };
