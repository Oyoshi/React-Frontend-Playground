import { TextFieldProps, TextField } from "@mui/material";

export const generateTextFields = (
  textFields: TextFieldProps[],
  handleChange: any
) =>
  textFields.map((tfp: TextFieldProps) => (
    <TextField {...tfp} onChange={handleChange(tfp["id"])} key={tfp["id"]} />
  ));
