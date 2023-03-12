import React from 'react';
import {CalculatorScreen} from './CalculatorScreen';
import {EqualityButton} from './EqualityButton';
import {Numbers} from './Numbers';
import {Operations} from './Operations';

export const Parts = [
	{id: 'screen', element: <CalculatorScreen />},
	{id: 'operations', element: <Operations />},
	{id: 'numbers', element: <Numbers />},
	{id: 'equalityButton', element: <EqualityButton />},
];
