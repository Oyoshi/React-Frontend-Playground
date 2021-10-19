import { TextFieldProps, TextField } from "@mui/material";
import { HandleInputsFunction, Inputs, InputsNames } from "common/types";

export const generateTextFields = (
  textFields: TextFieldProps[],
  handleChange: HandleInputsFunction,
  inputsValues: Inputs
) =>
  textFields.map((tfp: TextFieldProps) => {
    const inputId = tfp["id"] as string;
    return (
      <TextField
        {...tfp}
        onChange={handleChange(inputId)}
        key={inputId}
        value={inputsValues[inputId as InputsNames]}
      />
    );
  });
