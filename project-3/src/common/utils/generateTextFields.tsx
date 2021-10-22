import { TextFieldProps, TextField } from "@mui/material";
import { HandleInputsFunction, Inputs, InputsNames } from "common/types";

export const generateTextFields = (
  textFields: TextFieldProps[],
  handleChange: HandleInputsFunction,
  inputsValues: Inputs,
  errors: Record<string, boolean>
) =>
  textFields.map((tfp: TextFieldProps) => {
    const inputId = tfp["id"] as string;
    const containsError = errors[inputId];
    return (
      <TextField
        {...tfp}
        error={containsError}
        helperText={containsError ? "Invalid Value" : undefined}
        onChange={handleChange(inputId)}
        key={inputId}
        value={inputsValues[inputId as InputsNames]}
      />
    );
  });
