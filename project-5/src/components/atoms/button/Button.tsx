import { FC } from "react";
import { ButtonProps, NativeButtonProps } from "./Button.interface";
import { ActionButton } from "./Button.styles";

const Button = ({ btnType, ...rest }: ButtonProps | any) => (
  <ActionButton btnType={btnType} {...rest} />
);

export const PrimaryButton: FC<NativeButtonProps> = ({ ...rest }) => (
  <Button btnType="primary" {...rest} />
);
export const SecondaryButton: FC<NativeButtonProps> = ({ ...rest }) => (
  <Button btnType="secondary" {...rest} />
);
export const DangerButton: FC<NativeButtonProps> = ({ ...rest }) => (
  <Button btnType="accent" {...rest} />
);
