import { loginErrorFields } from "@/schema";
import { ValidationError } from "yup";

export const handleSchemaError = (error: ValidationError) => {
  const errors = {
    ...loginErrorFields,
  };
  error.inner.forEach(({ path, message }) => {
    errors[path] = message;
  });

  return errors;
};
