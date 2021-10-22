import { FC } from "react";
import { Typography, Button, FormControl, Box } from "@mui/material";
import { generateTextFields } from "common/utils";
import { USER_BASIC_INFO_TEXT_FIELDS, TITLE } from "./UserBasicInfoForm.const";
import { NEXT_STEP_BUTTON_TITLE } from "common/constants";
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
        <Typography variant="h3">{TITLE}</Typography>
        {generateTextFields(
          USER_BASIC_INFO_TEXT_FIELDS,
          handleChange,
          inputsValues,
          errors
        )}
        <Box display="flex" justifyContent="space-between">
          <Button onClick={nextStep} variant="contained" fullWidth>
            {NEXT_STEP_BUTTON_TITLE}
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default UserBasicInfoForm;
