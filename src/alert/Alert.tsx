import React, { FunctionComponent } from "react";
import "./Alert.scss";

export interface AlertProps {
  title: string;
}

const Alert: FunctionComponent<AlertProps> = (prop) => {
  return (
    <div className="alert alert-light" role="alert">
      A simple light alert—check it out!
    </div>
  );
};

export default Alert;