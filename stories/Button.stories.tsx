import React from "react";
import "../src/common/ui.scss";
import { Button } from "../src";

export default {
  title: "Button",
  component: Button,
};

export const Primary = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <Button
      title="PRIMARY"
      style="primary"
    />
  </div>
);

export const Secondary = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <Button
      title="SECONDARY"
      style="secondary"
    />
  </div>
);
