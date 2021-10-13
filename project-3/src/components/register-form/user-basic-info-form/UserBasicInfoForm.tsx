import { FC } from "react";
import { Typography, Button } from "@mui/material";
import { generateTextFields } from "common/utils";
import { USER_BASIC_INFO_TEXT_FIELDS } from "./UserBasicInfoForm.const";

interface IUserBasicInfoForm {
  nextStep: any;
  handleChange: any;
}

const UserBasicInfoForm: FC<IUserBasicInfoForm> = ({
  nextStep,
  handleChange,
}) => {
  return (
    <>
      <Typography variant="h3">User Basic Info</Typography>
      {generateTextFields(USER_BASIC_INFO_TEXT_FIELDS, handleChange)}
      <Button onClick={nextStep} variant="contained">
        Next
      </Button>
    </>
  );
};

export default UserBasicInfoForm;
