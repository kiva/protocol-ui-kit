import { FunctionComponent, MouseEventHandler } from "react";
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
export declare const ConsentCard: FunctionComponent<ConsentCardProps>;
