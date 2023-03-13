import React from 'react';
import {useAppSelector} from '~/src/hooks';
import {selectIsOver} from '~/src/store/slices/ui';
import {DragOver} from '~/src/types';
import {DraggableContainer} from '../../DraggableContainer';
import {DroppableArea} from '../../DroppableArea';
import {DropPositionLine} from '../../DroppableArea/DropPositionLine';

interface Props {
	handlePartDrop: (droppedId: string) => void;
	draggingOver: DragOver | undefined;
	constructed: {
		id: string;
		element: JSX.Element;
	}[];
	setConstructed: React.Dispatch<
		React.SetStateAction<
			{
				id: string;
				element: JSX.Element;
			}[]
		>
	>;
	setDraggingOver: React.Dispatch<React.SetStateAction<DragOver | undefined>>;
}

export const ConstructorDroppableArea = ({
	handlePartDrop,
	draggingOver,
	constructed,
	setConstructed,
	setDraggingOver,
}: Props) => {
	const {isOver} = useAppSelector(selectIsOver);

	return (
		<DroppableArea
			id={'calculatorConstructor'}
			onDrop={(droppedId) => {
				handlePartDrop(droppedId);
			}}
		>
			{constructed.map((part) => (
				<div key={part.id} className="relative">
					{part.id === draggingOver?.id && (
						<DropPositionLine
							position={
								draggingOver.side === 'Top'
									? DropPositionLine.position.TOP
									: DropPositionLine.position.BOT
							}
						/>
					)}
					{isOver &&
						!draggingOver &&
						part.id === constructed[constructed.length - 1].id && (
							<DropPositionLine position={DropPositionLine.position.BOT} />
						)}
					<DraggableContainer
						setDraggingOver={setDraggingOver}
						variant={DraggableContainer.variant.IN_CONSTRUCTOR}
						id={part.id}
						onDoubleClickHandler={() => {
							setConstructed((prev) =>
								prev.filter((currentPart) => currentPart.id !== part.id)
							);
						}}
					>
						{part.element}
					</DraggableContainer>
				</div>
			))}
		</DroppableArea>
	);
};
