import { ValidationError } from "yup";

export const handleSchemaError = (error: ValidationError, errorField: {}) => {
  const errors = {
    ...errorField,
  };
  error.inner.forEach(({ path, message }) => {
    errors[path] = message;
  });

  return errors;
};
