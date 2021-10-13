import { FC } from "react";
import { Typography, Button } from "@mui/material";
import { generateTextFields } from "common/utils";
import { USER_DETAILS_TEXT_FIELDS } from "./UserDetailsForm.const";

interface IUserDetailsForm {
  prevStep: any;
  nextStep: any;
  handleChange: any;
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
