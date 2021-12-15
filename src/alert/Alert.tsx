import React, { FunctionComponent } from "react";
import "./Alert.scss";

import alertSuccess from "../assets/icons/alert-success.svg";
import alertFailure from "../assets/icons/alert-failure.svg";
import alertInfo from "../assets/icons/alert-info.svg";

export interface AlertProps {
  text: string;
  variant: string;
}

export const Alert: FunctionComponent<AlertProps> = (prop) => {
  const variants = {
    info: alertInfo,
    success: alertSuccess,
    failure: alertFailure
  }
  const svgSrc = variants[prop.variant]
  return (
    <div className="alert alert-light" role="alert">
      <img className={"alert-icon"} src={svgSrc} alt="Fingerprint reference image" />
      <span className={`alert-text ${prop.variant}`}>{prop.text}</span>
    </div>
  );
};
