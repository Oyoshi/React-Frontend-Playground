import { FC } from "react";
import { Typography, Button, FormControl, Box } from "@mui/material";
import { generateTextFields } from "common/utils";
import { USER_ADDRESS_TEXT_FIELDS } from "./UserAddressForm.const";
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
}

const UserAddressForm: FC<IUserAddressForm> = ({
  prevStep,
  nextStep,
  handleChange,
  inputsValues,
}) => {
  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <FormControl>
        <Typography variant="h3">User Details Info</Typography>
        {generateTextFields(
          USER_ADDRESS_TEXT_FIELDS,
          handleChange,
          inputsValues
        )}
        <Box display="flex" justifyContent="space-between">
          <Button onClick={prevStep} variant="outlined" fullWidth>
            Back
          </Button>
          <Button onClick={nextStep} variant="contained" fullWidth>
            Next
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default UserAddressForm;
