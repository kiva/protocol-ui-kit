import React from "react";
import "../src/common/ui.scss";
import { Story, Meta } from '@storybook/react';
import { FingerReference, FingerReferenceProps } from "../src/finger-reference/FingerReference";

export default {
  title: 'Finger Reference',
  component: FingerReference,
  argTypes: {
    hand: {
      name: 'hand',
      control: {
        type: 'radio',
        options: ['left', 'right'],
      },
    },
    fingerPosition: {
      name: 'fingerPosition',
      control: {
        type: 'radio',
        options: ['0', '1', '2', '3', '4', '5']
      }
    }
  },
  args: {
    hand: 'left',
    fingerPosition: '0'
  }
} as Meta;

const Template: Story<FingerReferenceProps> = (args) => <FingerReference {...args} />;

export const Default = Template.bind({});
Default.args = {
  hand: 'left',
  fingerPosition: '1'
};