import React, { useState } from "react";
import UserBasicInfoForm from "./user-basic-info-form";
import UserDetailsForm from "./user-details-form";
import UserContactDetailsForm from "./user-contact-details-form";
import {
  HandleStepsFunction,
  HandleInputsFunction,
  ButtonMouseEvent,
} from "common/types";

const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const prevStep: HandleStepsFunction = (e: ButtonMouseEvent) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  const nextStep: HandleStepsFunction = (e: ButtonMouseEvent) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const handleChange: HandleInputsFunction =
    (inputName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {};

  switch (currentStep) {
    case 1:
      return (
        <UserBasicInfoForm nextStep={nextStep} handleChange={handleChange} />
      );
    case 2:
      return (
        <UserDetailsForm
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <UserContactDetailsForm
          prevStep={prevStep}
          handleChange={handleChange}
        />
      );
    default:
      return null;
  }
};

export default RegisterForm;
