export const getUniquePropertyValues = (array, property) => {
  return [...new Set(array.map((item) => item[property]))];
};
