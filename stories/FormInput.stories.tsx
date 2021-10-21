import React from "react";
import "../src/common/ui.scss";
import { FormInput } from "../src";

export default {
  title: "FormInput",
  component: FormInput,
};

export const Default = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <FormInput
      title="Fingerprint Scan"
    />
  </div>
);
