import { FC } from "react";
import { Typography, Button, FormControl, Box } from "@mui/material";
import { generateTextFields } from "common/utils";
import { USER_CONTACT_TEXT_FIELDS } from "./UserContactForm.const";
import {
  HandleStepsFunction,
  HandleInputsFunction,
  Inputs,
} from "common/types";

interface IUserContactForm {
  prevStep: HandleStepsFunction;
  handleChange: HandleInputsFunction;
  inputsValues: Inputs;
}

const UserContactForm: FC<IUserContactForm> = ({
  prevStep,
  handleChange,
  inputsValues,
}) => {
  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <FormControl>
        <Typography variant="h3">User Contact Details</Typography>
        {generateTextFields(
          USER_CONTACT_TEXT_FIELDS,
          handleChange,
          inputsValues
        )}
        <Box display="flex" justifyContent="space-between">
          <Button onClick={prevStep} variant="outlined" fullWidth>
            Back
          </Button>
          <Button variant="contained" fullWidth>
            Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default UserContactForm;
