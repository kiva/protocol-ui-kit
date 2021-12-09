import React from "react";
import "../src/common/ui.scss";
import { FingerReference } from "../src";

export default {
  title: "Finger Reference",
  component: FingerReference,
};

export const Left = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <FingerReference
      hand="left"
      fingerPosition="0"
    />
  </div>
);

export const LeftVariants = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <div style={{ margin: "5px"}}>
      <FingerReference
        hand="left"
        fingerPosition="1"
      />
    </div>
    <div style={{ margin: "5px"}}>
      <FingerReference
        hand="left"
        fingerPosition="2"
      />
    </div>
    <div style={{ margin: "5px"}}>
      <FingerReference
        hand="left"
        fingerPosition="3"
      />
    </div>
    <div style={{ margin: "5px"}}>
      <FingerReference
        hand="left"
        fingerPosition="4"
      />
    </div>
    <div style={{ margin: "5px"}}>
      <FingerReference
        hand="left"
        fingerPosition="5"
      />
    </div>
  </div>
);

export const Right = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <FingerReference
      hand="right"
      fingerPosition="0"
    />
  </div>
);

export const RightVariants = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <div style={{ margin: "5px"}}>
      <FingerReference
        hand="right"
        fingerPosition="1"
      />
    </div>
    <div style={{ margin: "5px"}}>
      <FingerReference
        hand="right"
        fingerPosition="2"
      />
    </div>
    <div style={{ margin: "5px"}}>
      <FingerReference
        hand="right"
        fingerPosition="3"
      />
    </div>
    <div style={{ margin: "5px"}}>
      <FingerReference
        hand="right"
        fingerPosition="4"
      />
    </div>
    <div style={{ margin: "5px"}}>
      <FingerReference
        hand="right"
        fingerPosition="5"
      />
    </div>
  </div>
);
