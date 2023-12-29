import HttpClient from "./API/httpClient";

const login = (data) => {
  return HttpClient("/user/login-user", { method: "POST", data: data });
};

const getAllItemApi = () => {
  return HttpClient("/getItems", { method: "GET" });
};
// // REACT_APP_API_BASE_URL= `https://apiuatmotor.rbstaging.in/api`
// const type = (data) => HttpClient("/getOwnerTypes", { method: "POST", data });

export default { login, getAllItemApi };
