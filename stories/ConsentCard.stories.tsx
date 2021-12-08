import React from "react";
import "../src/common/ui.scss";
import { ConsentCard } from "../src";

export default {
  title: "Consent Card",
  component: ConsentCard,
};

const pii = [
  "National ID",
  "National ID Issue Date",
  "Voter ID Voter ID Issue Date",
  "First Name",
  "Middle Name",
  "Gender",
 " Date of Birth",
  "Occupation",
  "Phone Number",
  "Residential",
  "Address"
];

export const Default = (): React.ReactNode => (
    <div
      className="flex items-center justify-center"
      style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
    >
      <ConsentCard
        title="User Agreement"
        agreement="I agree that the following personal information held with the National Civil Registration Authority will be shared with KIVA MFI as part of the “Know Your Customer” verification and this institution can keep a copy of this data:"
        accept="Accept"
        back=" Go Back"
        pii={pii}
      />
  </div>
);