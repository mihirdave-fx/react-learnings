import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//get method
export const getPostData = () => {
  return api.get("/posts");
};

//delete method
export const deletePostData = (id) => {
  return api.delete(`/posts/${id}`);
};

//post method
export const postData = (post) => {
  return api.post("/posts", post);
};

//put-update method
export const updateData = (id, post) => {
  return api.put(`/posts/${id}`, post);
};
