import { loginErrorFields, signupErrorFields } from "@/schema";
import { ValidationError } from "yup";

export const handleSchemaError = (error: ValidationError) => {
  const errors = {
    ...signupErrorFields,
  };
  error.inner.forEach(({ path, message }) => {
    errors[path] = message;
  });

  return errors;
};
