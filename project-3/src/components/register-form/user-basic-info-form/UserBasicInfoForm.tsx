import { FC } from "react";
import { Typography, Button } from "@mui/material";
import { generateTextFields } from "common/utils";
import { USER_BASIC_INFO_TEXT_FIELDS } from "./UserBasicInfoForm.const";
import { HandleStepsFunction, HandleInputsFunction } from "common/types";

interface IUserBasicInfoForm {
  nextStep: HandleStepsFunction;
  handleChange: HandleInputsFunction;
}

const UserBasicInfoForm: FC<IUserBasicInfoForm> = ({
  nextStep,
  handleChange,
}) => {
  return (
    <>
      <Typography variant="h3">User Basic Info</Typography>
      {generateTextFields(USER_BASIC_INFO_TEXT_FIELDS, handleChange)}
      <Button onClick={nextStep} variant="contained">
        Next
      </Button>
    </>
  );
};

export default UserBasicInfoForm;
