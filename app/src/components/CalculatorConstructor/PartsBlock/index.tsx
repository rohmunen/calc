import _ from 'lodash';
import React from 'react';
import {useAppDispatch} from '~/src/hooks';
import {setIsDragging, resetIsDragging} from '~/src/store/slices/ui';
import {DragOver} from '~/src/types';
import {DraggableContainer} from '../../DraggableContainer';
import {Parts} from '../Parts';
import {PartsContainer} from '../Parts/PartsContainer';

interface Props {
	constructed: {
		id: string;
		element: JSX.Element;
	}[];
	setDraggingOver: React.Dispatch<React.SetStateAction<DragOver | undefined>>;
}

export const PartsBlock = ({constructed, setDraggingOver}: Props) => {
	const dispatch = useAppDispatch();

	return (
		<PartsContainer>
			{Parts.map((part) => (
				<DraggableContainer
					onDragStart={() => {
						dispatch(
							setIsDragging({
								dragging: true,
								droppableAreasIds: ['calculatorConstructor'],
							})
						);
					}}
					onDragEnd={() => {
						dispatch(resetIsDragging());
					}}
					setDraggingOver={setDraggingOver}
					variant={
						_.find(constructed, part)
							? DraggableContainer.variant.INACTIVE
							: DraggableContainer.variant.DEFAULT
					}
					id={part.id}
					key={part.id}
				>
					{part.element}
				</DraggableContainer>
			))}
		</PartsContainer>
	);
};
