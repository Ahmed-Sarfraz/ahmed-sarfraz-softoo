import PropTypes from "prop-types";

export const productPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string,
});
