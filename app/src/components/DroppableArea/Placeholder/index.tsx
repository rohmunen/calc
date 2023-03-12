import React from 'react';
import {ReactComponent as DroppableSVG} from '~/assets/svg/droppableArea/droppable.svg';

export const Placeholder = () => {
	return (
		<div className="flex flex-col h-full w-full items-center justify-center">
			<DroppableSVG />
			<p className="text-purple text-md mt-[13px]">Перетащите сюда</p>
			<p className="text-gray-extra-darken text-sm mt-[3px]">
				любой элемент из левой панели
			</p>
		</div>
	);
};
