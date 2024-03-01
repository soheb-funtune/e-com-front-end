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
const rezorpayCheckoutAPI = (userId, singleItem) => {
  const { product_id, ...rest } = singleItem;
  return HttpClient(`/payment/order-checkout?user_id=${userId}`, {
    method: "POST",
    data: { ...rest, product_id: product_id },
  });
};
const rzPaymentVarificationAPI = (userId, IDs) => {
  return HttpClient(`/payment/varification?user_id=${userId}`, {
    method: "POST",
    data: IDs,
  });
};
// REACT_APP_API_BASE_URL= `https://apiuatmotor.rbstaging.in/api`
const type = (data) => HttpClient("/getOwnerTypes", { method: "POST", data });

const sendEmailToUser = (data) =>
  HttpClient("/sendEmailToUser", { method: "POST", data });

export default {
  login,
  getAllItemApi,
  getAllCartItemApi,
  removeCartItemApi,
  addCartItemApi,
  updateCartQuantityAPI,
  rezorpayCheckoutAPI,
  rzPaymentVarificationAPI,
  sendEmailToUser,
};
