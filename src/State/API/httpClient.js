import axios from "axios";
import queryString from "query-string";
import CryptoJS from "crypto-js";
import SecureLS from "secure-ls";
// import { DataEncrypt, DataDecrypt } from "utils";

//api encryption
export const DataEncrypt = (text) => {
  var key = CryptoJS.enc.Utf8.parse("01234567890123456789012345678901");
  var iv = CryptoJS.enc.Utf8.parse("1234567890123412");
  let encryptedTxt = CryptoJS.AES.encrypt(JSON.stringify(text), key, {
    iv: iv,
  });
  return encryptedTxt.toString();
};

//api decryption
export const DataDecrypt = (encryptedTxt) => {
  var DataEncrypt = encryptedTxt ? encryptedTxt.toString() : "";
  var key = CryptoJS.enc.Utf8.parse("01234567890123456789012345678901");
  var iv = CryptoJS.enc.Utf8.parse("1234567890123412");
  var decrypted = CryptoJS.AES.decrypt(DataEncrypt, key, {
    iv: iv,
  });
  var decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
  return decrypted;
};

const defaultOptions = {
  headers: {},
  queryParams: null,
};

export const restClient = axios.create();

restClient.interceptors.response.use(
  function (response) {
    console.log({ response });
    return response;
  },
  function (error) {
    const err = error.response;
    // const ls = new SecureLS();
    if (err.status === 401) {
      localStorage.remove("token");
      localStorage.remove("user");
      window.history.go("/");
    }
    return Promise.reject(error);
  }
);

const httpClient = async (
  url = "",
  options = defaultOptions,
  noBaseUrl,
  cancelToken,
  allowRaw,
  payloadKey,
  timeout
) => {
  const baseUrl = `http://localhost:4000`; // process.env.REACT_APP_API_BASE_URL;
  let fullPath = noBaseUrl ? `${url}` : `${baseUrl}${url}`;
  let encryptionHeader = false;
  // process.env.REACT_APP_BROKER === "GRAM" ||
  // process.env.REACT_APP_BROKER === "UIB" &&
  //   !(options?.data instanceof FormData);
  console.log({ options });
  if (options.queryParams) {
    const queryString = queryString.stringify(options.queryParams);
    fullPath = `${fullPath}?${queryString}`;
  }
  //   const ls = new SecureLS();
  const token = localStorage?.getItem("token");
  restClient.defaults.headers.common[
    "lanninsport"
  ] = `NThmZjc0MGMzZGI1YjY3NDAyZjZlY2Y3OGQ4ODgyZjIjZmM4OTllZjc0NzBlZTY3MDUyZWQ5MmYwZjkwYTI2MTk=`;
  restClient.defaults.headers.common["Accept"] = `application/json`;
  if (token) {
    restClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  if (encryptionHeader) {
    restClient.defaults.headers.common["x-encryption"] = `keep`;
  } else {
    restClient.defaults.headers.common["x-encryption"] = ``;
  }

  return await restClient({
    url: fullPath,
    method: options.method || "GET",
    data: encryptionHeader
      ? options?.data // { payload: DataEncrypt(options.data) }
      : options.data,
    cancelToken: options.cancelToken,
    // timeout: process.env.REACT_APP_PROD === "YES" ? timeout : false,
  })
    .then((resp) => {
      console.log({ resp }, resp.data);
      let responseStringified = encryptionHeader
        ? DataDecrypt(resp?.data?.data)
        : resp;
      let response = encryptionHeader
        ? responseStringified && {
            data: JSON.parse(responseStringified),
          }
        : responseStringified;

      return {
        data: response?.data || {},
        errors: response?.data.errors || response?.data.message,
        error: response?.data.error || response?.data.message,
        message: response?.data.message || response?.data?.msg,
        errorSpecific: response?.data?.errorSpecific,
        success:
          (resp?.status === 200 || resp?.status === 201) &&
          response?.data?.status,
        ...(allowRaw && { raw_response: response }),
        overrideMsg: response?.data.overrideMsg,
      };
    })
    .catch((errResp) => {
      console.log({ errResp });
      let errRespStringified = encryptionHeader
        ? DataDecrypt(errResp?.data?.data)
        : errResp;
      let err =
        encryptionHeader && errRespStringified
          ? JSON.parse(errRespStringified)
          : errResp;

      return {
        data: err,
        errors: err?.response?.data.errors,
        success: false, // mock status
        errorData: err?.response?.data, // mock status
        message:
          err?.response?.msg ||
          err?.response?.data?.message ||
          err?.response?.data?.msg ||
          err?.response?.data?.m,
        errorSpecific:
          err?.response?.errorSpecific || err?.response?.data?.errorSpecific,
        ...(allowRaw && { raw_error: err }),
      };
    });
};

export default httpClient;
