import React, { FunctionComponent } from "react";
import "./Fingerprint.scss";
import fingerprint from "../assets/icons/fingerprint-default.svg";
import fingerprintSuccess from "../assets/icons/fingerprint-success.svg";

export interface FingerprintProps {
  variant: string;
}

export const Fingerprint: FunctionComponent<FingerprintProps> = (prop) => {
  const variants = {
    default: fingerprint,
    success: fingerprintSuccess
  }
  const svgSrc = variants[prop.variant]
  return (
    <img src={svgSrc} width={200} alt="Fingerprint reference image" />
  );
};