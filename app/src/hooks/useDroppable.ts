import { useState } from 'react';
import { Parts } from '../components/CalculatorConstructor/Parts';
import { DragOver } from '../types';
import { insertArrayAtPos } from '../utils';

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
    const partBeingDropped = Parts.find((part) => part.id === droppedId)!;
    if (constructed.find((part) => part.id === droppedId) === undefined) {
      const dropAtIndex = constructed.findIndex((part) => part.id === draggingOver?.id);
      if (dropAtIndex === -1) {
        setConstructed((prev) => [...prev, partBeingDropped]);
        return;
      }
      if (draggingOver?.side === 'Top') {
        setConstructed((prev) => [...insertArrayAtPos(prev, dropAtIndex, partBeingDropped)]);
      } else {
        setConstructed((prev) => [...insertArrayAtPos(prev, dropAtIndex + 1, partBeingDropped)]);
      }
      return;
    }

    const index = constructed.findIndex((part) => part.id === droppedId);
    const dropAtIndex = constructed.findIndex((part) => part.id === draggingOver?.id);
    const copy = [...constructed];
    if (!draggingOver) {
      copy.splice(index, 1);
      copy.splice(constructed.length - 1, 0, partBeingDropped);
      setConstructed(copy);
      return;
    }
    if (draggingOver?.side === 'Top') {
      copy.splice(index, 1);
      copy.splice(dropAtIndex, 0, partBeingDropped);
    } else {
      copy.splice(index, 1);
      copy.splice(dropAtIndex, 0, partBeingDropped);
    }

    setConstructed(copy);
  };

  return [handlePartDrop, constructed, setConstructed, draggingOver, setDraggingOver];
};
