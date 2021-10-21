import React from "react";
import "../src/common/ui.scss";
import { Alert } from "../src";

export default {
  title: "Toast",
  component: Alert,
};

export const Default = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <Alert
      title="Fingerprint Scan"
    />
  </div>
);

export const Docs = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <Alert
      title="Docs"
    />
  </div>
);
