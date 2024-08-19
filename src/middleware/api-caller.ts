import Axios, { AxiosResponse } from "axios";
import AxiosApiCallerConfig from "src/interfaces/AxiosApiCallerConfig";
import { BASE_URL, REQUEST_TYPES } from "src/middleware/url";

export function axiosApiCaller({
  method = REQUEST_TYPES.GET,
  url = "",
  params = {},
  data = {},
  contentType = "application/json",
  Auth = null,
}: AxiosApiCallerConfig): Promise<any> {
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
    headers: {
      ...headers,
    },
    responseType: "json",
    validateStatus: (status) => status >= 200 && status < 300,
  })
    .then(({ data: resp }: AxiosResponse<any>) => {
      console.log(resp, "resp");
      return resp;
    })
    .catch((error: any) => {
      if (error.response && error.response.status === 401) {
        // Based on project requirement it could be used to logout in case session is expired
        console.log("logout");
      } else {
        throw error;
      }
    });
}
