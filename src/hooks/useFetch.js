import { useState } from "react";
import { axiosApiCaller } from "../middleware/api-caller";
import useDeepCompareEffect from "./useDeepCompareEffect";

const useFetch = (apiConfig) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useDeepCompareEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axiosApiCaller(apiConfig);
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    apiCall();
  }, [apiConfig]);

  return { data, loading, error };
};

export default useFetch;
