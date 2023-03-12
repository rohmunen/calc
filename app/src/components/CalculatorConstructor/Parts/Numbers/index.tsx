import React from 'react';
import {Button} from '../../../Button';
import {numbersButtons} from './constants';
import {NumbersLayout} from './NumbersLayout';

export const Numbers = () => {
	return (
		<NumbersLayout>
			{numbersButtons.map((numberButton) => (
				<Button
					key={numberButton.symbol}
					onClick={numberButton.onClick}
					colSpan={numberButton.colSpan}
				>
					{numberButton.symbol}
				</Button>
			))}
		</NumbersLayout>
	);
};
