import React, { FunctionComponent, MouseEventHandler } from "react";
import { Button } from "../button/Button";
import _ from "lodash";
import "./ConsentCard.scss";
import "../typography.scss";
import "../variables.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

export interface ConsentCardProps {
  title: string;
  agreement: string;
  pii: string[];
  backBtnHandler?: MouseEventHandler<HTMLButtonElement>;
  backBtnContent?: string;
  acceptBtnHandler: MouseEventHandler<HTMLButtonElement>;
  acceptBtnContent: string;
}

export const ConsentCard: FunctionComponent<ConsentCardProps> = (prop) => {
  return (
    <div className="flex flex-col justify-center rounded-3xl jurne-card bg-white p-1.5">
      <div className="flex flex-col max-w-md px-8 py-6 space-y-5">
        <span className="consent-title items-center">{prop.title}</span>
        <div className="consent-body items-center">{prop.agreement}</div>
        <ul>
          {_.map(prop.pii, item => <li className="pii-list-item">{item}</li>)}
        </ul>
      </div>
      <div className="row col-flex">
        <div className="col-sm text-center">
          <Button
            classes={['accept']}
            title={prop.acceptBtnContent}
            style="primary"
            onClick={prop.acceptBtnHandler}
          ></Button>
        </div>
      </div>
    </div>
  );
};
