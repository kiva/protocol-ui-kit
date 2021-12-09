import { FunctionComponent } from "react";
import "./Dropdown.scss";
import "../typography.scss";
import "../variables.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
export interface DropdownProps {
    options: string[];
}
export declare const Dropdown: FunctionComponent<DropdownProps>;
