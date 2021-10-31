import {ComponentMeta, ComponentStoryObj} from '@storybook/react';

import {Icon} from './Icon';

export default {
  title: 'libraries/react-native-vector-icons/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Basic: ComponentStoryObj<typeof Icon> = {
  args: {
    name: 'account',
  },
};
