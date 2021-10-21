import React from "react";
import "../src/common/ui.scss";
import { ActionCard } from "../src";

export default {
  title: "Action Card",
  component: ActionCard,
};

export const Default = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <ActionCard
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
    <ActionCard
      title="Docs"
      caption="Learn how to extend your system"
      src="/img/icons/docs.svg"
    />
  </div>
);
