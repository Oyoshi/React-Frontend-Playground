import { FC } from "react";
import { InputStyled } from "./Input.styles";
import { NativeInputProps } from "./Input.interface";

export const Input: FC<NativeInputProps | any> = ({ ...rest }) => (
  <InputStyled {...rest} />
);
