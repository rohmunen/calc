import React from 'react';
import {useAppSelector} from '~/src/hooks';
import {selectDisplayNumber} from '~/src/store/slices/calculator';

export const CalculatorScreen = () => {
	const {displayNumber} = useAppSelector(selectDisplayNumber);

	return <div className="flex justify-end px-[8px] rounded-[6px] bg-gray h-[52px] text-lg font-extrabold">{displayNumber}</div>;
};
