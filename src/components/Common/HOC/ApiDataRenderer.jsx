import useFetch from "../../../hooks/useFetch";
import ErrorMessage from "../Leaf/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../Leaf/LoadingSpinner/LoadingSpinner";
import PropTypes from "prop-types";

const ApiDataRenderer = ({ config, renderData }) => {
  const { data, loading, error } = useFetch(config);
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return renderData(data);
};

ApiDataRenderer.defaultProps = {
  config: {},
  renderData: () => null,
};

ApiDataRenderer.propTypes = {
  config: PropTypes.object.isRequired,
  renderData: PropTypes.func.isRequired,
};

export default ApiDataRenderer;
