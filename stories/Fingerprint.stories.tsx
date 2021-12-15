import React from "react";
import "../src/common/ui.scss";
import { Fingerprint } from "../src";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Fingerprint',
  component: Fingerprint,
  argTypes: {
    variant: {
      options: ['default', 'success'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args): React.ReactNode => (
  <div
    className="flex items-center justify-center"
    style={{ margin: "auto 0", background: "#f8f8f8", height: "75vh" }}
  >
    <Fingerprint
      variant={args.variant}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};