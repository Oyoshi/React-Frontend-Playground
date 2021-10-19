import { FC } from "react";
import { Typography, Button } from "@mui/material";
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
    <>
      <Typography variant="h3">User Contact Details</Typography>
      {generateTextFields(USER_CONTACT_TEXT_FIELDS, handleChange, inputsValues)}
      <Button onClick={prevStep} variant="outlined">
        Back
      </Button>
      <Button variant="contained">Submit</Button>
    </>
  );
};

export default UserContactForm;
