import React from 'react';
import {Button} from '../../../Button';
import {operationsButtons} from './constants';
import {OperationsLayout} from './OperationsLayout';

export const Operations = () => {
	return (
		<OperationsLayout>
			{operationsButtons.map((operation) => (
				<Button key={operation.symbol} onClick={operation.onClick}>
					{operation.symbol}
				</Button>
			))}
		</OperationsLayout>
	);
};
