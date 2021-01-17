/**
 * @param {String} input
 * validate user name entered
 */
export const validateName = (input) => {
  const name = /^[^-\s][a-zA-Z ]+$/;
  return name.test(String(input));
};
