import React, { useState } from "react";
import { isEmpty } from "lodash";
import UserBasicInfoForm from "./userBasicInfoForm";
import UserAddressForm from "./userAddressForm";
import UserContactForm from "./userContactForm";
import SuccessPage from "./successPage";
import {
  HandleStepsFunction,
  HandleInputsFunction,
  ButtonMouseEvent,
  Inputs,
} from "common/types";

const phoneUtil =
  require("google-libphonenumber").PhoneNumberUtil.getInstance();

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

  const [errors, updateErrors] = useState<Record<string, boolean>>({
    firstName: false,
    lastName: false,
    zipCode: false,
    phoneNumber: false,
    email: false,
  });

  const validateBasicInfoForm = () => {
    const isFirstNameEmpty = isEmpty(inputsValues.firstName);
    const isLastNameEmpty = isEmpty(inputsValues.lastName);
    updateErrors({
      ...errors,
      firstName: isFirstNameEmpty,
      lastName: isLastNameEmpty,
    });
    return !(isFirstNameEmpty || isLastNameEmpty);
  };

  const validateAddressForm = () => {
    const zipCodePattern = new RegExp("^([0-9]{2})(-[0-9]{3})");
    const isZipCodeValid =
      isEmpty(inputsValues.zipCode) ||
      zipCodePattern.test(inputsValues.zipCode);
    updateErrors({ ...errors, zipCode: !isZipCodeValid });
    return isZipCodeValid;
  };

  const validateContactForm = () => {
    const isPhoneNumberValid =
      isEmpty(inputsValues.phoneNumber) ||
      phoneUtil.isValidNumberForRegion(
        phoneUtil.parse(inputsValues.phoneNumber, "PL"),
        "PL"
      );
    const emailPattern = new RegExp(
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+"
    );
    const isEmailValid =
      isEmpty(inputsValues.email) || emailPattern.test(inputsValues.email);
    updateErrors({
      ...errors,
      phoneNumber: !isPhoneNumberValid,
      email: !isEmailValid,
    });
    return isPhoneNumberValid && isEmailValid;
  };

  const prevStep: HandleStepsFunction = (e: ButtonMouseEvent) => {
    e.preventDefault();
    if (currentStep === 2 && !validateAddressForm()) return;
    if (currentStep === 3 && !validateContactForm()) return;
    setCurrentStep(currentStep - 1);
  };

  const nextStep: HandleStepsFunction = (e: ButtonMouseEvent) => {
    e.preventDefault();
    if (currentStep === 1 && !validateBasicInfoForm()) return;
    if (currentStep === 2 && !validateAddressForm()) return;
    setCurrentStep(currentStep + 1);
  };

  const handleChange: HandleInputsFunction =
    (inputName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      updateInputsValues({ ...inputsValues, [inputName]: e.target.value });
    };

  const handleSubmit = (e: ButtonMouseEvent) => {
    e.preventDefault();
    if (!validateContactForm()) return;
    setCurrentStep(currentStep + 1);
  };

  switch (currentStep) {
    case 1:
      return (
        <UserBasicInfoForm
          nextStep={nextStep}
          handleChange={handleChange}
          inputsValues={inputsValues}
          errors={errors}
        />
      );
    case 2:
      return (
        <UserAddressForm
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          inputsValues={inputsValues}
          errors={errors}
        />
      );
    case 3:
      return (
        <UserContactForm
          prevStep={prevStep}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputsValues={inputsValues}
          errors={errors}
        />
      );
    case 4:
      return <SuccessPage />;
    default:
      return null;
  }
};

export default RegisterForm;
