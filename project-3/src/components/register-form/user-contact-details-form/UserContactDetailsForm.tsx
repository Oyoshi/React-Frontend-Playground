import { FC } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface IUserContactDetailsForm {
  prevStep: any;
}

const UserContactDetailsForm: FC<IUserContactDetailsForm> = ({ prevStep }) => {
  return (
    <>
      <Typography variant="h3">User Contact Details</Typography>
      <Button onClick={prevStep}>Back</Button>
    </>
  );
};

export default UserContactDetailsForm;
