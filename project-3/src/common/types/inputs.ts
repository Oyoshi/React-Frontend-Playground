export enum InputsNames {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  STREET = "street",
  CITY = "city",
  ZIP_CODE = "zipCode",
  PHONE_NUMBER = "phoneNumber",
  EMAIL = "email",
}

export type Inputs = Record<InputsNames, string>;
