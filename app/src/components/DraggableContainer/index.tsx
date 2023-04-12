import classNames from 'classnames';
import React, { DragEvent } from 'react';
import { DragOver } from '~/src/types';
import { Variant, VARIANTS_MAP } from './models';

interface Props {
  id: string;
  variant: Variant;
  onDoubleClickHandler?: () => void;
  children: React.ReactNode;
  setDraggingOver: React.Dispatch<React.SetStateAction<DragOver | undefined>>;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  unDraggable?: boolean;
}

export const DraggableContainer = ({
  children,
  id,
  onDoubleClickHandler,
  variant,
  setDraggingOver,
  onDragStart,
  onDragEnd,
  unDraggable
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
        setDraggingOver(undefined);
      }}
      onDragOver={(e) => {
        const coords = e.currentTarget.getBoundingClientRect();
        const dragOverPosition = coords.top + coords.height - e.clientY;
        setDraggingOver({
          id,
          side: dragOverPosition > coords.height / 2 ? 'Top' : 'Bottom'
        });
      }}
      draggable={!unDraggable && variant !== Variant.INACTIVE}
      className={classNames(
        {
          'rounded-[4px] p-[4px] w-full': true,
          'cursor-not-allowed': unDraggable
        },

        VARIANTS_MAP[variant]
      )}
    >
      {children}
    </div>
  );
};

DraggableContainer.variant = Variant;

DraggableContainer.defaultProps = {
  variant: Variant.DEFAULT
};
