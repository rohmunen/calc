import React from 'react';

interface Props {
	message: string;
}

export const CalculatorMessage = ({message}: Props) => {
	return <div className="text-[24px] leading-[29.05px]">{message}</div>;
};
