import classnames from 'classnames';
import React, {DragEvent, useRef, useState} from 'react';
import {DragOver} from '~/src/types';

interface Props {
	id: string;
	variant: Variant;
	onDoubleClickHandler?: () => void;
	children: React.ReactNode;
	setDraggingOver: React.Dispatch<React.SetStateAction<DragOver | undefined>>;
	onDragStart?: () => void;
	onDragEnd?: () => void;
}

enum Variant {
	DEFAULT = 'default',
	INACTIVE = 'inactive',
	IN_CONSTRUCTOR = 'inConstructor',
}

const VARIANTS_MAP: Record<Variant, string> = {
	[Variant.DEFAULT]: 'shadow-md',
	[Variant.INACTIVE]: 'opacity-50',
	[Variant.IN_CONSTRUCTOR]: 'bg-white',
};

export const DraggableContainer = ({
	children,
	id,
	onDoubleClickHandler,
	variant,
	setDraggingOver,
	onDragStart,
	onDragEnd,
}: Props) => {
	const handleDragStart = (e: DragEvent<HTMLDivElement>, id: string) => {
		e.dataTransfer.setData('id', `${id}`);
	};

	return (
		<div
			onDoubleClick={onDoubleClickHandler}
			onDragEnd={() => {
				setDraggingOver(undefined);
				onDragEnd?.();
			}}
			onDragStart={(e) => {
				handleDragStart(e, id);
				onDragStart?.();
			}}
			onDragLeave={() => {
				setDraggingOver(undefined)
			}}
			onDragOver={(e) => {
				const coords = e.currentTarget.getBoundingClientRect();
				const dragOverPosition = coords.top + coords.height - e.clientY;
				setDraggingOver({
					id,
					side: dragOverPosition > coords.height / 2 ? 'Top' : 'Bottom',
				});
			}}
			draggable={variant !== Variant.INACTIVE}
			className={classnames(
				'rounded-[4px] p-[4px] w-full',
				VARIANTS_MAP[variant]
			)}
		>
			{children}
		</div>
	);
};

DraggableContainer.variant = Variant;

DraggableContainer.defaultProps = {
	variant: Variant.DEFAULT,
};