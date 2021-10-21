import React, { FunctionComponent } from "react";
import "./JurneCard.scss";

export interface JurneCardProps {
  title: string;
  caption: string;
  src: string;
}

export const JurneCard: FunctionComponent<JurneCardProps> = (prop) => {
  return (
    <div className="flex flex-col justify-center rounded-3xl jurne-card bg-white p-1.5">
      <div className="flex flex-col max-w-md px-8 py-6 space-y-5 items-center">
        <img src={prop.src} width={36} alt={prop.caption} />
        <h3 className="font-bold text-gray-900 text-xl">{prop.title}</h3>
        <span className="text-center text-gray-600">{prop.caption}</span>
      </div>
    </div>
  );
};
