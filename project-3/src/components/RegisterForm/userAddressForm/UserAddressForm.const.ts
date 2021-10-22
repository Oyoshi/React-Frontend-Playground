import { TextFieldProps } from "@mui/material";

export const USER_ADDRESS_TEXT_FIELDS: TextFieldProps[] = [
  {
    id: "street",
    placeholder: "Enter Your Street",
    label: "Street",
    margin: "normal",
    fullWidth: true,
  },
  {
    id: "city",
    placeholder: "Enter Your City",
    label: "City",
    margin: "normal",
    fullWidth: true,
  },
  {
    id: "zipCode",
    placeholder: "Enter Your Zip Code",
    label: "Zip Code",
    margin: "normal",
    fullWidth: true,
  },
];

export const TITLE = "User Details Info";
