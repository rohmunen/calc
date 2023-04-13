import React from 'react';
import { ISelected } from '../../../types';
import { ReactComponent as ConstructorIcon } from '~/assets/svg/constructorTabs/constructor.svg';
import { ReactComponent as RuntimeIcon } from '~/assets/svg/constructorTabs/runtime.svg';
import { CalculatorTab } from './models';

export const constructorTabs: ISelected<CalculatorTab>[] = [
  { value: CalculatorTab.RUNTIME, label: 'Runtime', icon: <RuntimeIcon /> },
  { value: CalculatorTab.CONSTRUCTOR, label: 'Constructor', icon: <ConstructorIcon /> }
];
