import { FC } from "react";
import { Typography, Button } from "@mui/material";
import { generateTextFields } from "common/utils";
import { USER_DETAILS_TEXT_FIELDS } from "./UserDetailsForm.const";
import { HandleStepsFunction, HandleInputsFunction } from "common/types";

interface IUserDetailsForm {
  prevStep: HandleStepsFunction;
  nextStep: HandleStepsFunction;
  handleChange: HandleInputsFunction;
}

const UserDetailsForm: FC<IUserDetailsForm> = ({
  prevStep,
  nextStep,
  handleChange,
}) => {
  return (
    <>
      <Typography variant="h3">User Details Info</Typography>
      {generateTextFields(USER_DETAILS_TEXT_FIELDS, handleChange)}
      <Button onClick={prevStep} variant="outlined">
        Back
      </Button>
      <Button onClick={nextStep} variant="contained">
        Next
      </Button>
    </>
  );
};

export default UserDetailsForm;
