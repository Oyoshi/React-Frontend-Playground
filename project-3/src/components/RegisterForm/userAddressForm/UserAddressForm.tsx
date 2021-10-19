import { FC } from "react";
import { Typography, Button } from "@mui/material";
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
    <>
      <Typography variant="h3">User Details Info</Typography>
      {generateTextFields(USER_ADDRESS_TEXT_FIELDS, handleChange, inputsValues)}
      <Button onClick={prevStep} variant="outlined">
        Back
      </Button>
      <Button onClick={nextStep} variant="contained">
        Next
      </Button>
    </>
  );
};

export default UserAddressForm;
