import React, { FunctionComponent, MouseEventHandler } from "react";
import "./Button.scss";

export interface ButtonProps {
  title: string;
  style: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FunctionComponent<ButtonProps> = (prop) => {
  return (
    <button type="button" className="btn btn-primary protocol-button" onClick={prop.onClick}>{prop.title}</button>
  );
};
