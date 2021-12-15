import React, { FunctionComponent, MouseEventHandler } from "react";
import "./Button.scss";
import _ from 'lodash';

export interface ButtonProps {
  title: string;
  style: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classes?: string[];
}

export const Button: FunctionComponent<ButtonProps> = (prop) => {
  let classString = ""
  _.forEach(prop.classes, function(value) {
    classString = classString + ` ${value}`
  });
  return (
    <button type="button" className={`btn btn-primary protocol-button${classString}`} onClick={prop.onClick}>{prop.title}</button>
  );
};
