import { useState } from "react";
import UserBasicInfoForm from "./user-basic-info-form";
import UserDetailsForm from "./user-details-form";
import UserContactDetailsForm from "./user-contact-details-form";

const RegisterForm = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <UserBasicInfoForm nextStep={nextStep} />;
    case 2:
      return <UserDetailsForm nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <UserContactDetailsForm prevStep={prevStep} />;
    default:
      return null;
  }
};

export default RegisterForm;
