import { FC } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface IUserDetailsForm {
  nextStep: any;
  prevStep: any;
}

const UserDetailsForm: FC<IUserDetailsForm> = ({ nextStep, prevStep }) => {
  return (
    <>
      <Typography variant="h3">User Details Info</Typography>
      <Button onClick={nextStep}>Next</Button>
      <Button onClick={prevStep}>Back</Button>
    </>
  );
};

export default UserDetailsForm;
