import axios from "axios";

const fetchTags = async () => {
  return axios.get("/tags");
};

const fetchTagDetail = async (tagId: string) => {
  return axios.get(`/tags/${tagId}`);
};

const followUnfollowTag = async (tagId: string) => {
  return axios.patch(`/tags/${tagId}/followUnfollow`);
};

export { fetchTags,fetchTagDetail ,followUnfollowTag};
