import React from 'react';
import { BorderSquarePosition } from './models';

interface Props {
  position: BorderSquarePosition;
}

export const BorderSquare = ({ position }: Props) => {
  return (
    <div
      className={`absolute bg-purple w-[4px] h-[4px] rotate-45 ${
        position === BorderSquarePosition.LEFT ? 'left-[-2px]' : 'right-[-2px]'
      }`}
    />
  );
};

BorderSquare.position = BorderSquarePosition;
