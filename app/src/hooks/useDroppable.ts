import {useState} from 'react';
import {Parts} from '../components/CalculatorConstructor/Parts';
import {DragOver} from '../types';

export const useDroppable = (): [
	handlePartDrop: (droppedId: string) => void,
	constructed: {
		id: string;
		element: JSX.Element;
	}[],
	setConstructed: React.Dispatch<
		React.SetStateAction<
			{
				id: string;
				element: JSX.Element;
			}[]
		>
	>,
	draggingOver: DragOver | undefined,
	setDraggingOver: React.Dispatch<React.SetStateAction<DragOver | undefined>>
] => {
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

	return [handlePartDrop, constructed, setConstructed, draggingOver, setDraggingOver];
};
