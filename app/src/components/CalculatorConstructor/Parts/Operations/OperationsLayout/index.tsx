import React from 'react';

interface Props {
	children: React.ReactNode[];
}

export const OperationsLayout = ({children}: Props) => {
	return <div className="grid grid-cols-operations gap-[8px]">{children}</div>;
};
