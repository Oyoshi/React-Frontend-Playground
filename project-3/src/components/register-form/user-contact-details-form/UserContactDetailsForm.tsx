import { FC } from "react";
import { Typography, Button } from "@mui/material";
import { generateTextFields } from "common/utils";
import { USER_CONTACT_DETAILS_TEXT_FIELDS } from "./UserContactDetailsForm.const";

interface IUserContactDetailsForm {
  prevStep: any;
  handleChange: any;
}

const UserContactDetailsForm: FC<IUserContactDetailsForm> = ({
  prevStep,
  handleChange,
}) => {
  return (
    <>
      <Typography variant="h3">User Contact Details</Typography>
      {generateTextFields(USER_CONTACT_DETAILS_TEXT_FIELDS, handleChange)}
      <Button onClick={prevStep} variant="outlined">
        Back
      </Button>
      <Button variant="contained">Submit</Button>
    </>
  );
};

export default UserContactDetailsForm;
