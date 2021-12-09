import React, { FunctionComponent } from "react";
import "./FingerReference.scss";
import leftHand0 from "../assets/icons/left-0.svg";
import leftHand1 from "../assets/icons/left-1.svg";
import leftHand2 from "../assets/icons/left-2.svg";
import leftHand3 from "../assets/icons/left-3.svg";
import leftHand4 from "../assets/icons/left-4.svg";
import leftHand5 from "../assets/icons/left-5.svg";
import rightHand0 from "../assets/icons/right-0.svg";
import rightHand1 from "../assets/icons/right-1.svg";
import rightHand2 from "../assets/icons/right-2.svg";
import rightHand3 from "../assets/icons/right-3.svg";
import rightHand4 from "../assets/icons/right-4.svg";
import rightHand5 from "../assets/icons/right-5.svg";

export interface FingerReferenceProps {
  hand: string;
  fingerPosition: string;
}

export const FingerReference: FunctionComponent<FingerReferenceProps> = (prop) => {
  const referenceImages = {
    left: {
      0: leftHand0,
      1: leftHand1,
      2: leftHand2,
      3: leftHand3,
      4: leftHand4,
      5: leftHand5,
    },
    right: {
      0: rightHand0,
      1: rightHand1,
      2: rightHand2,
      3: rightHand3,
      4: rightHand4,
      5: rightHand5,
    }
  }
  const svgSrc = referenceImages[prop.hand][prop.fingerPosition];
  return (
    <div className="flex flex-col justify-center rounded-3xl jurne-card bg-white p-1.5">
      <div className="flex flex-col max-w-md px-8 py-6 space-y-5 items-center">
        <img src={svgSrc} width={100} alt="Fingerprint reference image" />
      </div>
    </div>
  );
};