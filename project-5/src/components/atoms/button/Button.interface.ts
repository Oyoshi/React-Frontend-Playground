import React from "react";

export interface NativeButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export interface ButtonProps extends NativeButtonProps {
  btnType: "primary" | "secondary" | "accent";
}
