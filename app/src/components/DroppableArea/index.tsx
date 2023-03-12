import classnames from 'classnames';
import React, {useState} from 'react';
import {DragOver} from '~/src/types';
import {Placeholder} from './Placeholder';

interface Props {
	children: React.ReactNode | React.ReactNode[];
	onDrop: (id: string) => void;
	dragOver?: DragOver;
	isDragging: boolean;
}

export const DroppableArea = ({children, onDrop, isDragging}: Props) => {
	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		onDrop(e.dataTransfer.getData('id'));
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
		e.preventDefault();

	return (
		<div
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			className={classnames({"flex flex-col gap-[16px] max-w-[250px] w-full border-2 border-dashed rounded-[6px] border-gray-darken": true, "bg-light-blue-50": isDragging})}
		>
			{children}
		</div>
	);
};
