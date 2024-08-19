export const getUniquePropertyValues = <T, K extends keyof T>(
  array: T[],
  property: K
): T[K][] => {
  const uniqueValues = new Set(array.map((item) => item[property]));
  return Array.from(uniqueValues);
};
