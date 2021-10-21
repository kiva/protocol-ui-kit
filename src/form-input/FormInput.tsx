import React, { FunctionComponent } from "react";
import "./FormInput.scss";
import { Form } from 'react-bootstrap';

export interface FormInputProps {
  title: string;
}

export const FormInput: FunctionComponent<FormInputProps> = (prop) => {
  return (
    <div className="form-input">
      <Form.Label>Username</Form.Label>
      <Form.Control className="text-input-field" type="email" placeholder="Enter email" />
    </div>
  );
};
