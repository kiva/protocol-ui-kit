import { FunctionComponent } from "react";
import "./ConsentCard.scss";
export interface ConsentCardProps {
    title: string;
    agreement: string;
    pii: Array<string>;
    back: string;
    accept: string;
}
export declare const ConsentCard: FunctionComponent<ConsentCardProps>;
