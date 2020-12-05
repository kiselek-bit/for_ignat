import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';
import HW12 from "../p2-homeworks/h12/HW12";
import {ReduxStoreDecorator} from "./decorators/ReduxStoreDecorators";

export default {
  title: 'HomeWorks/HW12',
  component: HW12,
  decorators: [ReduxStoreDecorator],
  argTypes: {
    themes: ['dark', 'red', 'some']
  },
} as Meta;

const Template: Story = (args) => <HW12 />;

export const HW12Example = Template.bind({});
HW12Example.args = {

};
