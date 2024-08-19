import useFetch from "../../../hooks/useFetch";
import AxiosApiCallerConfig from "../../../interfaces/AxiosApiCallerConfig";
import ErrorMessage from "../Leaf/ErrorMessage/ErrorMessage";
import LoadingSpinner from "src/components/Common/Leaf/LoadingSpinner/LoadingSpinner";

interface ApiDataRendererProps<T> {
  config: AxiosApiCallerConfig;
  renderData: (data: T | null) => JSX.Element | null;
}
const ApiDataRenderer = <T,>({
  config,
  renderData,
}: ApiDataRendererProps<T>): JSX.Element | null => {
  const { data, loading, error } = useFetch<T>(config);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return renderData(data);
};

export default ApiDataRenderer;
