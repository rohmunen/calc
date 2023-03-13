import React from 'react';

interface Props {
	children: React.ReactNode[];
}

export const PartsContainer = ({children}: Props) => {
	return (
		<div className="flex flex-col gap-[12px] max-w-[240px] w-full">
			{children}
		</div>
	);
};
