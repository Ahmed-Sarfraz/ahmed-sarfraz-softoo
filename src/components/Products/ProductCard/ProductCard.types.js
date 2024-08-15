import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

ProductCard.propType = {
  children: PropTypes.node.isRequired,
};

ProductCard.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

ProductCard.Name.propTypes = {
  children: PropTypes.node.isRequired,
};

ProductCard.Price.propTypes = {
  children: PropTypes.node.isRequired,
};

// Define propTypes for other components as needed.
