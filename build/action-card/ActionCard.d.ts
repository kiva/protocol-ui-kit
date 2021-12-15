import { FunctionComponent } from "react";
import "./ActionCard.scss";
export interface ActionCardProps {
    title: string;
    caption: string;
    src: string;
}
export declare const ActionCard: FunctionComponent<ActionCardProps>;
