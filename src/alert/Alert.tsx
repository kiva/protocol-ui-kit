import React, { FunctionComponent } from "react";
import "./Alert.scss";

export interface AlertProps {
  title: string;
}

export const Alert: FunctionComponent<AlertProps> = (prop) => {
  return (
    <div className="alert alert-light" role="alert">
      A simple light alert—check it out!
    </div>
  );
};
