import HttpClient from "./API/httpClient";

const login = (data) => {
  return HttpClient("/user/login-user", { method: "POST", data: data });
};

const getAllItemApi = () => {
  return HttpClient("/getItems", { method: "GET" });
};
const getAllCartItemApi = (userId) => {
  return HttpClient(`/user/cart-items?user_id=${userId}`, {
    method: "GET",
  });
};
const removeCartItemApi = (userId, id) => {
  return HttpClient(`/user/cart-items?user_id=${userId}`, {
    method: "DELETE",
    data: { product_id: id },
  });
};
const addCartItemApi = (userId, singleItem) => {
  const { _id, ...rest } = singleItem;
  return HttpClient(`/user/cart-items?user_id=${userId}`, {
    method: "POST",
    data: { ...rest, product_id: _id },
  });
};
const updateCartQuantityAPI = (userId, _id, quantity) => {
  return HttpClient(`/user/cart-items?user_id=${userId}`, {
    method: "PUT",
    data: { product_id: _id, quantity },
  });
};
const rezorpayAPI = (userId, singleItem) => {
  const { product_id, ...rest } = singleItem;
  return HttpClient(`/rezorpay?user_id=${userId}`, {
    method: "POST",
    data: { ...rest, product_id: product_id },
  });
};
// // REACT_APP_API_BASE_URL= `https://apiuatmotor.rbstaging.in/api`
// const type = (data) => HttpClient("/getOwnerTypes", { method: "POST", data });

export default {
  login,
  getAllItemApi,
  getAllCartItemApi,
  removeCartItemApi,
  addCartItemApi,
  updateCartQuantityAPI,
  rezorpayAPI,
};
