import useFetch from "../../../hooks/useFetch";
import ErrorMessage from "../Leaf/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../Leaf/LoadingSpinner/LoadingSpinner";

const ApiDataRenderer = ({ config, renderData }) => {
  const { data, loading, error } = useFetch(config);
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return renderData(data);
};

export default ApiDataRenderer;
