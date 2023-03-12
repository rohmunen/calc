import React, {useEffect, useState} from 'react';
import {DraggableContainer} from '../DraggableContainer';
import {DroppableArea} from '../DroppableArea';
import {Placeholder} from '../DroppableArea/Placeholder';
import {PartsContainer} from '../PartsContainer';
import {TabsBar} from '../TabsBar';
import {constructorTabs} from './constants';
import {Parts} from './Parts';
import _ from 'lodash';
import {DragOver, IDroppableContext} from '~/src/types';

export const DroppableContext = React.createContext<IDroppableContext | null>(
	null
);

export const CalculatorConstructor = () => {
	const [selectedTab, setSelectedTab] = useState(1);
	const [constructed, setConstructed] = useState<typeof Parts>([]);
	const [isDragging, setIsDragging] = useState(false);
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

	useEffect(() => {
		console.log(draggingOver);
	});

	return (
		<div className="flex flex-col gap-[30px] w-full max-w-[540px]">
			<div className="self-end">
				<TabsBar
					tabs={constructorTabs}
					selected={selectedTab}
					setSelected={setSelectedTab}
				/>
			</div>
			<div className="flex gap-[56px]">
				<PartsContainer>
					{Parts.map((part) => (
						<DraggableContainer
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
					isDragging={isDragging}
					onDrop={(droppedId) => {
						handlePartDrop(droppedId);
					}}
				>
					{constructed.length > 0 ? (
						constructed.map((part) => (
							<DraggableContainer
								setDraggingOver={setDraggingOver}
								variant={DraggableContainer.variant.IN_CONSTRUCTOR}
								id={part.id}
								key={part.id}
								onDoubleClickHandler={() => {
									setConstructed((prev) =>
										prev.filter((currentPart) => currentPart.id !== part.id)
									);
								}}
							>
								{part.element}
							</DraggableContainer>
						))
					) : (
						<Placeholder />
					)}
				</DroppableArea>
			</div>
		</div>
	);
};
