import { TextFieldProps } from "@mui/material";

export const USER_BASIC_INFO_TEXT_FIELDS: TextFieldProps[] = [
  {
    id: "firstName",
    placeholder: "Enter Your First Name",
    label: "First Name",
    margin: "normal",
    fullWidth: true,
    required: true,
  },
  {
    id: "lastName",
    placeholder: "Enter Your Last Name",
    label: "Last Name",
    margin: "normal",
    fullWidth: true,
    required: true,
  },
];

export const TITLE = "User Basic Info";
