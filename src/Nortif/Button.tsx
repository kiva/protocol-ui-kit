import React, { FunctionComponent } from "react";
import "./Button.scss";

export interface ButtonProps {
  title: string;
}

export const Button: FunctionComponent<ButtonProps> = (prop) => {
  return (
    <button type="button" className="btn btn-primary">{prop.title}</button>
  );
};
