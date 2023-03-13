import React, {useEffect, useState} from 'react';
import {DraggableContainer} from '../DraggableContainer';
import {DroppableArea} from '../DroppableArea';
import {Placeholder} from '../DroppableArea/Placeholder';
import {PartsContainer} from '../PartsContainer';
import {TabsBar} from '../TabsBar';
import {constructorTabs} from './constants';
import {Parts} from './Parts';
import _ from 'lodash';
import {DragOver} from '~/src/types';
import {useAppDispatch, useAppSelector} from '~/src/hooks';
import {
	resetIsDragging,
	selectIsDragging,
	selectIsOver,
	setIsDragging,
} from '~/src/store/slices/ui';
import {DropPositionLine} from '../DroppableArea/DropPositionLine';

export const CalculatorConstructor = () => {
	const [selectedTab, setSelectedTab] = useState(2);
	const [constructed, setConstructed] = useState<typeof Parts>([]);
	const [draggingOver, setDraggingOver] = useState<DragOver | undefined>();

	const handlePartDrop = (droppedId: string) => {
		if (constructed.find((part) => part.id === droppedId) === undefined) {
			const dropAtIndex = constructed.findIndex(
				(part) => part.id === draggingOver?.id
			);
			if (dropAtIndex === -1) {
				setConstructed((prev) => [
					...prev,
					Parts.find((part) => part.id === droppedId)!,
				]);
				return;
			}
			if (draggingOver?.side === 'Top') {
				setConstructed((prev) => [
					...prev,
					...prev.splice(
						dropAtIndex,
						0,
						Parts.find((v) => v.id === droppedId)!
					),
				]);
			} else {
				setConstructed((prev) => [
					...prev,
					...prev.splice(
						dropAtIndex + 1,
						0,
						Parts.find((v) => v.id === droppedId)!
					),
				]);
			}
		} else {
			const index = constructed.findIndex((part) => part.id === droppedId);
			const dropAtIndex = constructed.findIndex(
				(part) => part.id === draggingOver?.id
			);
			const copy = [...constructed];
			if (draggingOver?.side === 'Top') {
				copy.splice(index, 1);
				copy.splice(dropAtIndex, 0, Parts.find((v) => v.id === droppedId)!);
			} else {
				copy.splice(index, 1);
				copy.splice(dropAtIndex + 1, 0, Parts.find((v) => v.id === droppedId)!);
			}

			setConstructed(copy);
		}
	};

	const dispatch = useAppDispatch();
	const {isDragging} = useAppSelector(selectIsDragging);
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
			<div className={`flex justify-end gap-[56px] ${selectedTab === 2 && 'disable-buttons'}`}>
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
