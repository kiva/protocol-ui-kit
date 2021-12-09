import React from "react";
import "../src/common/ui.scss";
import { Dropdown } from "../src";

export default {
  title: "Dropdown",
  component: Dropdown,
};

export const Default = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <Dropdown
      options={["National ID Number", "Voter ID"]}
    />
  </div>
);