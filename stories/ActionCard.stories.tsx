import React from "react";
import "../src/common/ui.scss";
import { ActionCard } from "../src";
import fingerprintIcon from "../src/assets/icons/fingerprint.svg";
import docsIcon from "../src/assets/icons/docs.svg";
import registryIcon from "../src/assets/icons/registry.svg";
import scanIcon from "../src/assets/icons/scan.svg";
import smsIcon from "../src/assets/icons/sms.svg";

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
      src={fingerprintIcon}
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
      src={fingerprintIcon}
    />
  </div>
);

export const Registry = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <ActionCard
      title="Registry"
      caption="Learn how to extend your system"
      src={registryIcon}
    />
  </div>
);
