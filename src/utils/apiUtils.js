import { axiosApiCaller } from "../middleware/api-caller";

export const fetchData = async (apiConfig) => {
  try {
    const response = await axiosApiCaller(apiConfig);
    if (!response) {
      throw new Error("Network response was not ok");
    }
    return response.result;
  } catch (error) {
    throw new Error(
      error.message ||
        `An error occurred while calling api ${apiConfig.method} ${apiConfig.url}`
    );
  }
};
