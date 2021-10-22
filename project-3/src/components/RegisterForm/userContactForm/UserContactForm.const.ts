import { TextFieldProps } from "@mui/material";

export const USER_CONTACT_TEXT_FIELDS: TextFieldProps[] = [
  {
    id: "phoneNumber",
    placeholder: "Enter Your Phone Number",
    label: "Phone Number",
    margin: "normal",
    fullWidth: true,
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter Your Email",
    label: "Email",
    margin: "normal",
    fullWidth: true,
  },
];

export const TITLE = "User Contact Details";
