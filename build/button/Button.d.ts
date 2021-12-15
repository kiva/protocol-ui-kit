import { FunctionComponent, MouseEventHandler } from "react";
import "./Button.scss";
export interface ButtonProps {
    title: string;
    style: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    classes?: string[];
}
export declare const Button: FunctionComponent<ButtonProps>;
