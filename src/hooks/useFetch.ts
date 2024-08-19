import { useState } from "react";
import { axiosApiCaller } from "../middleware/api-caller";
import useDeepCompareEffect from "./useDeepCompareEffect";
import AxiosApiCallerConfig from "../interfaces/AxiosApiCallerConfig";

const useFetch = <T = any>(
  apiConfig: AxiosApiCallerConfig
): { data: T | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useDeepCompareEffect(() => {
    const apiCall = async () => {
      try {
        const response = await axiosApiCaller(apiConfig);
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
