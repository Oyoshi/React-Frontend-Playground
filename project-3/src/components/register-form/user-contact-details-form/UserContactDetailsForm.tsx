import { FC } from "react";
import { Typography, Button } from "@mui/material";

interface IUserContactDetailsForm {
  prevStep: any;
}

const UserContactDetailsForm: FC<IUserContactDetailsForm> = ({ prevStep }) => {
  return (
    <>
      <Typography variant="h3">User Contact Details</Typography>
      <Button onClick={prevStep} variant="outlined">
        Back
      </Button>
      <Button variant="contained">Submit</Button>
    </>
  );
};

export default UserContactDetailsForm;
