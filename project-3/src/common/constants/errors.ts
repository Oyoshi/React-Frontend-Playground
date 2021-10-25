const FIELD_REQUIRED = "Field is required!";
const INVALID_ZIPCODE = "ZipCode is invalid!";
const INVALID_PHONE_NUMBER = "Phone number is invalid!";
const INVALID_EMAIL = "Email is invalid!";

export const ERROR_MESSAGES: Record<string, string> = {
  firstName: FIELD_REQUIRED,
  lastName: FIELD_REQUIRED,
  zipCode: INVALID_ZIPCODE,
  phoneNumber: INVALID_PHONE_NUMBER,
  email: INVALID_EMAIL,
};
