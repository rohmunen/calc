import classNames from 'classnames';
import React from 'react';
import {useAppSelector} from '~/src/hooks';
import {selectDisplayNumber} from '~/src/store/slices/calculator';
import {CalculatorMessage} from './CalculatorMessage';

export const CalculatorScreen = () => {
	const {displayNumber} = useAppSelector(selectDisplayNumber);

	const safeNumber =
		displayNumber.length > 20
			? parseFloat(displayNumber).toPrecision(1)
			: String(parseFloat(displayNumber));

	const display =
		safeNumber === 'NaN' || safeNumber === 'Infinity' ? (
			<CalculatorMessage message="Не определено" />
		) : (
			safeNumber
		);

	return (
		<div
			className={classNames({
				'text-ellipsis text-blue-darken flex items-end pb-[4px] justify-end px-[8px] rounded-[6px] bg-gray h-[52px] text-lg font-extrabold':
					true,
				'text-md-lg font-bold': String(safeNumber).length > 10,
			})}
		>
			{display}
		</div>
	);
};
