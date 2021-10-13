import { FC } from "react";
import { Typography, Button } from "@mui/material";

interface IUserBasicInfoForm {
  nextStep: any;
}

const UserBasicInfoForm: FC<IUserBasicInfoForm> = ({ nextStep }) => {
  return (
    <>
      <Typography variant="h3">User Basic Info</Typography>
      <Button onClick={nextStep} variant="contained">
        Next
      </Button>
    </>
  );
};

export default UserBasicInfoForm;
