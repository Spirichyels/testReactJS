export const requred = (value) => {
  if (value) return undefined;
  return "Fields is requred";
};

export const maxLentgthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max lehgth is ${maxLength} symbols`;
  return undefined;
};
