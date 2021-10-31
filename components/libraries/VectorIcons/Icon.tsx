import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {materialIcons} from './icons.type';

type Props = {name: keyof materialIcons};
export const Icon = ({name}: Props) => {
  return <MaterialCommunityIcons size={72} name={name} />;
};
