import classNames from 'classnames';
import React from 'react';
import {useAppSelector} from '~/src/hooks';
import {selectDisplayNumber} from '~/src/store/slices/calculator';

export const CalculatorScreen = () => {
	const {displayNumber} = useAppSelector(selectDisplayNumber);

	const safeNumber =
		displayNumber.length > 20
			? parseFloat(displayNumber).toPrecision(1)
			: parseFloat(displayNumber);

	return (
		<div
			className={classNames({
				'text-ellipsis flex items-end pb-[4px] justify-end px-[8px] rounded-[6px] bg-gray h-[52px] text-lg font-extrabold':
					true,
				'text-md-lg font-bold': String(safeNumber).length > 10,
			})}
		>
			{safeNumber}
		</div>
	);
};
