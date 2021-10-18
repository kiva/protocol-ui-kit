import React from "react";
import "../src/common/ui.scss";
import { Button } from "../src";

export default {
  title: "App Button",
  component: Button,
};

export const Default = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <Button
      title="Fingerprint Scan"
      caption="User fingerprint to access your records"
      src="/img/icons/fingerprint.svg"
    />
  </div>
);

export const NotherStory = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <Button
      title="Fingerprint Scan"
      caption="User fingerprint to access your records"
      src="/img/icons/fingerprint.svg"
    />
  </div>
);

export const Docs = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <Button
      title="Docs"
      caption="Learn how to extend your system"
      src="/img/icons/docs.svg"
    />
  </div>
);
