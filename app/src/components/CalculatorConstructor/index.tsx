import React, {useState} from 'react';
import {DraggableContainer} from '../DraggableContainer';
import {DroppableArea} from '../DroppableArea';
import {PartsContainer} from '../PartsContainer';
import {TabsBar} from '../TabsBar';
import {constructorTabs} from './constants';
import {Parts} from './Parts';
import _ from 'lodash';
import {useAppDispatch, useAppSelector} from '~/src/hooks';
import {
	resetIsDragging,
	selectIsOver,
	setIsDragging,
} from '~/src/store/slices/ui';
import {DropPositionLine} from '../DroppableArea/DropPositionLine';
import {useDroppable} from '~/src/hooks/useDroppable';

export const CalculatorConstructor = () => {
	const [selectedTab, setSelectedTab] = useState(2);
	
	const [
		handlePartDrop,
		constructed,
		setConstructed,
		draggingOver,
		setDraggingOver,
	] = useDroppable();

	const dispatch = useAppDispatch();
	const {isOver} = useAppSelector(selectIsOver);

	return (
		<div className="flex flex-col gap-[30px] w-full max-w-[540px]">
			<div className="self-end">
				<TabsBar
					tabs={constructorTabs}
					selected={selectedTab}
					setSelected={setSelectedTab}
				/>
			</div>
			<div
				className={`flex justify-end gap-[56px] ${
					selectedTab === 2 && 'disable-buttons'
				}`}
			>
				{selectedTab === 2 ? (
					<>
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
											<DropPositionLine
												position={DropPositionLine.position.BOT}
											/>
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
					</>
				) : (
					<div className="max-w-[242px] w-full flex flex-col gap-[8px]">
						{constructed.map((part) => part.element)}
					</div>
				)}
			</div>
		</div>
	);
};
