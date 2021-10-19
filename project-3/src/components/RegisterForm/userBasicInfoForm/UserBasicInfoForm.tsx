import { FC } from "react";
import { Typography, Button } from "@mui/material";
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
}

const UserBasicInfoForm: FC<IUserBasicInfoForm> = ({
  nextStep,
  handleChange,
  inputsValues,
}) => {
  return (
    <>
      <Typography variant="h3">User Basic Info</Typography>
      {generateTextFields(
        USER_BASIC_INFO_TEXT_FIELDS,
        handleChange,
        inputsValues
      )}
      <Button onClick={nextStep} variant="contained">
        Next
      </Button>
    </>
  );
};

export default UserBasicInfoForm;
