import { FC } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface IUserDetailsForm {
  prevStep: any;
  nextStep: any;
}

const UserDetailsForm: FC<IUserDetailsForm> = ({ prevStep, nextStep }) => {
  return (
    <>
      <Typography variant="h3">User Details Info</Typography>
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
