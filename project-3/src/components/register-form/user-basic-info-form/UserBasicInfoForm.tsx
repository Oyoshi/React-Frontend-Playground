import { FC } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface IUserBasicInfoForm {
  nextStep: any;
}

const UserBasicInfoForm: FC<IUserBasicInfoForm> = ({ nextStep }) => {
  return (
    <>
      <Typography variant="h3">User Basic Info</Typography>
      <Button onClick={nextStep}>Next</Button>
    </>
  );
};

export default UserBasicInfoForm;
