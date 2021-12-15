import React from "react";
import "../src/common/ui.scss";
import { Alert, AlertProps } from "../src/alert/Alert";
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    variant: {
      name: 'variant',
      control: { type: 'radio' },
      options: ['success', 'failure', 'info'],
    },
    text: {
      name: 'text',
      control: { type: 'text' }
    }
  },
  args: {
    text: "Test",
    variant: "success"
  }
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Test",
  variant: "success"
};