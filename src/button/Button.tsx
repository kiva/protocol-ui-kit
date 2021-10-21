<<<<<<< HEAD
<<<<<<< HEAD
import React, { FunctionComponent } from "react";
import "./Button.scss";

export interface ButtonProps {
  title: string;
}

export const Button: FunctionComponent<ButtonProps> = (prop) => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col justify-center rounded-3xl protocol-ui-card bg-white p-1.5">
      <div className="flex flex-col max-w-md px-8 py-6 space-y-5 items-center">
        <img src={prop.src} width={36} alt={prop.caption} />
        <h3 className="font-bold text-gray-900 text-xl">{prop.title}</h3>
        <span className="text-center text-gray-600">{prop.caption}</span>
      </div>
    </div>
=======
import React, { FunctionComponent} from "react";
=======
import React, { FunctionComponent } from "react";
>>>>>>> 30b6f2d (Introduce tailwind and the first component)
import "./Button.scss";

export interface ButtonProps {
  title: string;
  caption: string;
  src: string;
}

export const Button: FunctionComponent<ButtonProps> = (prop) => {
  return (
<<<<<<< HEAD
    <button className="jurne-button" onClick={onClick}>{label}</button>
>>>>>>> 5fbac97 (Ready to create NPM package)
=======
    <div className="flex flex-col justify-center rounded-3xl jurne-card bg-white p-1.5">
      <div className="flex flex-col max-w-md px-8 py-6 space-y-5 items-center">
        <img src={prop.src} width={36} alt={prop.caption} />
        <h3 className="font-bold text-gray-900 text-xl">{prop.title}</h3>
        <span className="text-center text-gray-600">{prop.caption}</span>
      </div>
    </div>
>>>>>>> 30b6f2d (Introduce tailwind and the first component)
=======
    <button type="button" className="btn btn-primary">{prop.title}</button>
>>>>>>> 3fefebf (New components added: QRCode, FormInput, Alert, ActionCard, Button)
  );
};
