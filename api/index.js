import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost/3000",
});

function fetchProductById(id) {
  return instance.get(`/products/${id}`);
}

export { fetchProductById };
