import {ISelected} from '../../types';
import React from 'react';
import {ReactComponent as ConstructorIcon} from '~/assets/svg/constructorTabs/constructor.svg';
import {ReactComponent as RuntimeIcon} from '~/assets/svg/constructorTabs/runtime.svg';

export const constructorTabs: ISelected<number>[] = [
	{value: 1, label: 'Constructor', icon: <ConstructorIcon />},
	{value: 2, label: 'Runtime', icon: <RuntimeIcon />},
];
