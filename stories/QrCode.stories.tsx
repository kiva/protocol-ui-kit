import React from "react";
import "../src/common/ui.scss";
import { QrCode } from "../src";

export default {
  title: "QR Code",
  component: QrCode,
};

export const Verified = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <QrCode
      url="kiva.org"
      state="verified"
    />
  </div>
);

export const Verifying = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <QrCode
      url="kiva.org"
      state="verifying"
    />
  </div>
);

export const Warning = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <QrCode
      url="kiva.org"
      state="warning"
    />
  </div>
);

export const Error = (): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <QrCode
      url="kiva.org"
      state="error"
    />
  </div>
);