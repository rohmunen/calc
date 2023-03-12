import React from 'react';

interface Props {
	children: React.ReactNode[];
}

export const NumbersLayout = ({children}: Props) => {
	return <div className='grid grid-cols-numbers gap-[8px]'>{children}</div>;
};
