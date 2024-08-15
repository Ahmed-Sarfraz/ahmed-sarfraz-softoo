import Axios from "axios";
import { REQUEST_TYPES, BASE_URL } from "./url";

export function axiosApiCaller({
  method = REQUEST_TYPES.GET,
  url = "",
  params = {},
  data = {},
  contentType = "application/json",
  Auth = null,
} = {}) {
  let headers = { "Content-Type": contentType };
  // For Authentication as per project requirement we could use below
  // if (Auth) {
  //   const token=""
  //   headers = {
  //     Authorization: `Token ${token}`,
  //     "Content-Type": contentType,
  //   };
  // }
  return Axios({
    method,
    baseURL: BASE_URL,
    url,
    params,
    data,

    // We could transform request as per project and specific api requirement just like intereceptors
    // transformRequest: [
    //   (reqData) => {
    //     return reqData
    //   },
    // ],

    // We could transform request as per project and specific api requirement just like intereceptors
    // transformResponse: [
    //   (resData) => {
    //     return resData;
    //   },
    // ],
    headers: {
      ...headers,
    },
    responseType: "json",
    validateStatus: (status) => status >= 200 && status < 300,
  })
    .then(({ data: resp }) => {
      console.log(resp, "resp");
      return resp;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        // Based on project requirement it could be used to logout in case session is expired
        console.log("logout");
      } else {
        throw error;
      }
    });
}
