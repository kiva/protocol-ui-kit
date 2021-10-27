import React, { FunctionComponent } from "react";
import classNames from "classnames";
import "./Button.scss";

export interface ButtonProps {
  title: string;
  style: string;
}

export const Button: FunctionComponent<ButtonProps> = (prop) => {
  let styleClass = `btn-${prop.style}`;
  let buttonClasses = {
    "btn": true,
    "mb-6": true
  };
  buttonClasses[styleClass] = true;
  return (
    <button type="button" className={classNames(buttonClasses)}>
      {prop.title}
    </button>
  );
};
