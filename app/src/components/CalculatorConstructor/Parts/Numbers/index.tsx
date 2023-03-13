import React from 'react';
import {useAppDispatch} from '~/src/hooks';
import {Button} from '../../../Button';
import {numbersButtons} from './constants';
import {NumbersLayout} from './NumbersLayout';

export const Numbers = () => {
	const dispatch = useAppDispatch();

	return (
		<NumbersLayout>
			{numbersButtons.map((numberButton) => (
				<Button
					key={numberButton.symbol}
					onClick={() => {
						dispatch(numberButton.action);
					}}
					colSpan={numberButton.colSpan}
				>
					{numberButton.symbol}
				</Button>
			))}
		</NumbersLayout>
	);
};
