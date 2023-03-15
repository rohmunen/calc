import React from 'react';
import {useAppDispatch} from '~/src/hooks';
import {handleEqualsClick, setOperation} from '~/src/store/slices/calculator';
import {Button} from '../../../Button';

export const EqualityButton = () => {
	const dispatch = useAppDispatch();

	return (
		<Button
			color={Button.color.PURPLE}
			height={Button.height.LG}
			onClick={() => {
				dispatch(handleEqualsClick());
			}}
		>
			=
		</Button>
	);
};
