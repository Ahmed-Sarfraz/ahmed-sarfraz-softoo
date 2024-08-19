import { useState } from "react";
import { axiosApiCaller } from "../middleware/api-caller";
import useDeepCompareEffect from "./useDeepCompareEffect";
import AxiosApiCallerConfig from "../interfaces/AxiosApiCallerConfig";
import Product from "../interfaces/Product";
const useFetch = (apiConfig: AxiosApiCallerConfig) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useDeepCompareEffect(() => {
    const apiCall = async () => {
      try {
        const response: Product[] = await axiosApiCaller(apiConfig);
        setData(response);
      } catch (err: any) {
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
