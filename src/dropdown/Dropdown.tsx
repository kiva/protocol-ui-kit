import React, { FunctionComponent, useState } from "react";
import _ from "lodash";
import "./Dropdown.scss";
import "../typography.scss";
import "../variables.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown as BoostrapDropdown } from 'react-bootstrap';

export interface DropdownProps {
  options: string[]
}

export const Dropdown: FunctionComponent<DropdownProps> = (prop) => {
  const [selectedOption, setSelectedOption] = useState("Select ID Type");
  const menuSelectionHandler: React.MouseEventHandler<HTMLElement> = (event) => {
    setSelectedOption(event.currentTarget['text']);
  }

  return (
    <BoostrapDropdown>
      <BoostrapDropdown.Toggle
        id="dropdown-basic"
        size="lg"
        className="protocol-dropdown-btn"
      >
        {selectedOption}
      </BoostrapDropdown.Toggle>

      <BoostrapDropdown.Menu>
      {
        _.map(prop.options,
          option => (
            <BoostrapDropdown.Item onClick={menuSelectionHandler}>
              {option}
            </BoostrapDropdown.Item>
          )
        )
      }
      </BoostrapDropdown.Menu>
    </BoostrapDropdown>
  );
};
