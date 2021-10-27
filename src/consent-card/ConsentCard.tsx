import React, { FunctionComponent } from "react";
import { Button } from "../button/Button";
import _ from "lodash";
import "./ConsentCard.scss";

export interface ConsentCardProps {
  title: string;
  agreement: string;
  pii: Array<string>;
  back: string;
  accept: string;
}

export const ConsentCard: FunctionComponent<ConsentCardProps> = (prop) => {
  return (
    <div className="flex flex-col justify-center rounded-3xl jurne-card bg-white p-1.5">
      <div className="flex flex-col max-w-md px-8 py-6 space-y-5">
        <span className="consent-title items-center">{prop.title}</span>
        <span className="consent-body items-center">{prop.agreement}</span>
        <ul>
          {prop.pii.map(item => <li className="pii-list-item">{item}</li>)}
        </ul>
      </div>
      <div className="row col-flex">
        <div className="col-sm text-center">
          <Button title={prop.back} style="secondary"></Button>
          </div>
          <div className="col-sm text-center">
          <Button title={prop.accept} style="primary"></Button>
        </div>
      </div>
    </div>
  );
};
