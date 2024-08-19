import useFetch from "../../../hooks/useFetch";
import AxiosApiCallerConfig from "../../../interfaces/AxiosApiCallerConfig";
import Product from "../../../interfaces/Product";
import ErrorMessage from "../Leaf/ErrorMessage/ErrorMessage";
// import LoadingSpinner from "../Leaf/LoadingSpinner/LoadingSpinner";
import LoadingSpinner from "src/components/Common/Leaf/LoadingSpinner/LoadingSpinner";

type ApiDataRendererProps = {
  config: AxiosApiCallerConfig;
  renderData: (data: Product[]) => JSX.Element | null;
};

const ApiDataRenderer: React.FC<ApiDataRendererProps> = ({
  config,
  renderData,
}) => {
  const { data, loading, error } = useFetch(config);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return renderData(data);
};

export default ApiDataRenderer;
