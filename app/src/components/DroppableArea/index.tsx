import classNames from 'classnames';
import React from 'react';
import {useAppDispatch, useAppSelector} from '~/src/hooks';
import {
	DroppableAreas,
	resetIsOver,
	selectIsDragging,
	setIsOver,
} from '~/src/store/slices/ui';
import {DragOver} from '~/src/types';
import {Placeholder} from './Placeholder';

interface Props {
	children: React.ReactNode | undefined;
	onDrop: (id: string) => void;
	dragOver?: DragOver;
	id: DroppableAreas;
}

export const DroppableArea = ({children, onDrop, id}: Props) => {
	const dispatch = useAppDispatch();

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		onDrop(e.dataTransfer.getData('id'));
		dispatch(resetIsOver());
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		dispatch(setIsOver(id));
	};

	const handleDragLeave = () => {
		dispatch(resetIsOver());
	};

	const {isDragging} = useAppSelector(selectIsDragging);

	return (
		<div
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			className={classNames({
				'flex flex-col gap-[8px] max-w-[244px] w-full border-2 border-dashed rounded-[6px] border-transparent':
					true,
				'!border-gray-darken': React.Children.count(children) === 0,
				'bg-light-blue-50':
					isDragging.droppableAreasIds.includes(id) &&
					React.Children.count(children) === 0,
			})}
		>
			{React.Children.count(children) === 0 && <Placeholder />}
			{children}
		</div>
	);
};
