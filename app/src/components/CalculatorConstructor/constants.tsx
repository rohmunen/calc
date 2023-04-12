import React from 'react';
import { ISelected } from '../../types';
import { ReactComponent as ConstructorIcon } from '~/assets/svg/constructorTabs/constructor.svg';
import { ReactComponent as RuntimeIcon } from '~/assets/svg/constructorTabs/runtime.svg';

export const constructorTabs: ISelected<number>[] = [
  { value: 1, label: 'Runtime', icon: <RuntimeIcon /> },
  { value: 2, label: 'Constructor', icon: <ConstructorIcon /> }
];
