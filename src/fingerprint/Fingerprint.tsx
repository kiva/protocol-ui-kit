import React, { FunctionComponent } from "react";
import "./Fingerprint.scss";

import fingerprint from "../assets/icons/fingerprint-default.svg";
import fingerprintSuccess from "../assets/icons/fingerprint-success.svg";
import fingerprintFailure from "../assets/icons/fingerprint-failure.svg";

export interface FingerprintProps {
  variant: string;
}

export const Fingerprint: FunctionComponent<FingerprintProps> = (prop) => {
  const variants = {
    default: fingerprint,
    success: fingerprintSuccess,
    failure: fingerprintFailure
  }
  const svgSrc = variants[prop.variant]
  console.log(svgSrc);
  debugger;
  return (
    <img src={svgSrc} width={200} alt="Fingerprint reference image" />
  );
};