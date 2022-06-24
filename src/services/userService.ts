import axios from "axios";

const fetchCurrentUser = async () => {
  return axios.get("/users/me");
};

export { fetchCurrentUser };
