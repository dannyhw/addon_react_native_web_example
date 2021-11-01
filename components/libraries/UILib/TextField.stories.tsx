import {ComponentMeta, ComponentStoryObj} from '@storybook/react';
import React from 'react';
// import {Label} from './Label';
import {TextField} from 'react-native-ui-lib';

export default {
  title: 'libraries/react-native-ui-lib/Label',
  component: TextField,
  render: () => <TextField />,
} as ComponentMeta<typeof TextField>;

export const Basic: ComponentStoryObj<typeof TextField> = {
  args: {},
};
