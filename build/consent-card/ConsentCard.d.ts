import { FunctionComponent } from "react";
import "./ConsentCard.scss";
import "../typography.scss";
import "../variables.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
export interface ConsentCardProps {
    title: string;
    agreement: string;
    pii: Array<string>;
    back: string;
    accept: string;
}
export declare const ConsentCard: FunctionComponent<ConsentCardProps>;
