import React, { useState } from "react";
import UserBasicInfoForm from "./userBasicInfoForm";
import UserAddressForm from "./userAddressForm";
import UserContactForm from "./userContactForm";
import {
  HandleStepsFunction,
  HandleInputsFunction,
  ButtonMouseEvent,
  Inputs,
} from "common/types";

const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [inputsValues, updateInputsValues] = useState<Inputs>({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    email: "",
  });

  const prevStep: HandleStepsFunction = (e: ButtonMouseEvent) => {
    e.preventDefault();
    setCurrentStep(currentStep - 1);
  };

  const nextStep: HandleStepsFunction = (e: ButtonMouseEvent) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const handleChange: HandleInputsFunction =
    (inputName: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      updateInputsValues({ ...inputsValues, [inputName]: e.target.value });

  switch (currentStep) {
    case 1:
      return (
        <UserBasicInfoForm
          nextStep={nextStep}
          handleChange={handleChange}
          inputsValues={inputsValues}
        />
      );
    case 2:
      return (
        <UserAddressForm
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          inputsValues={inputsValues}
        />
      );
    case 3:
      return (
        <UserContactForm
          prevStep={prevStep}
          handleChange={handleChange}
          inputsValues={inputsValues}
        />
      );
    default:
      return null;
  }
};

export default RegisterForm;
