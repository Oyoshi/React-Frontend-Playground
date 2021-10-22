import { FC } from "react";
import { Typography, Button, FormControl, Box } from "@mui/material";
import { generateTextFields } from "common/utils";
import { USER_ADDRESS_TEXT_FIELDS, TITLE } from "./UserAddressForm.const";
import {
  PREVIOUS_STEP_BUTTON_TITLE,
  NEXT_STEP_BUTTON_TITLE,
} from "common/constants";
import {
  HandleStepsFunction,
  HandleInputsFunction,
  Inputs,
} from "common/types";

interface IUserAddressForm {
  prevStep: HandleStepsFunction;
  nextStep: HandleStepsFunction;
  handleChange: HandleInputsFunction;
  inputsValues: Inputs;
  errors: Record<string, boolean>;
}

const UserAddressForm: FC<IUserAddressForm> = ({
  prevStep,
  nextStep,
  handleChange,
  inputsValues,
  errors,
}) => {
  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <FormControl>
        <Typography variant="h3">{TITLE}</Typography>
        {generateTextFields(
          USER_ADDRESS_TEXT_FIELDS,
          handleChange,
          inputsValues,
          errors
        )}
        <Box display="flex" justifyContent="space-between">
          <Button onClick={prevStep} variant="outlined" fullWidth>
            {PREVIOUS_STEP_BUTTON_TITLE}
          </Button>
          <Button onClick={nextStep} variant="contained" fullWidth>
            {NEXT_STEP_BUTTON_TITLE}
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default UserAddressForm;
