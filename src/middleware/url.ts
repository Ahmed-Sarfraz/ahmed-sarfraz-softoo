export const REACT_APP_API_URL = process.env.REACT_APP_API_URL as string;
export const BASE_URL = REACT_APP_API_URL;

export const ENDPOINTS = {
  GET_ITEMS: `${BASE_URL}/benirvingplt/products/products`,
} as const;

export const REQUEST_TYPES = {
  DELETE: "DELETE",
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
} as const;
