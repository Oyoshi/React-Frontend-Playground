import { FC } from "react";
import { Typography, Button, FormControl, Box } from "@mui/material";
import { generateTextFields } from "common/utils";
import { USER_BASIC_INFO_TEXT_FIELDS } from "./UserBasicInfoForm.const";
import {
  HandleStepsFunction,
  HandleInputsFunction,
  Inputs,
} from "common/types";

interface IUserBasicInfoForm {
  nextStep: HandleStepsFunction;
  handleChange: HandleInputsFunction;
  inputsValues: Inputs;
  errors: Record<string, boolean>;
}

const UserBasicInfoForm: FC<IUserBasicInfoForm> = ({
  nextStep,
  handleChange,
  inputsValues,
  errors,
}) => {
  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <FormControl>
        <Typography variant="h3">User Basic Info</Typography>
        {generateTextFields(
          USER_BASIC_INFO_TEXT_FIELDS,
          handleChange,
          inputsValues,
          errors
        )}
        <Box display="flex" justifyContent="space-between">
          <Button onClick={nextStep} variant="contained" fullWidth>
            Next
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default UserBasicInfoForm;
