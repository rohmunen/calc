export type DroppableAreas = 'calculatorConstructor';

export interface isDragging {
  dragging: boolean;
  droppableAreasIds: DroppableAreas[];
}

export interface IUiSlice {
  isDragging: isDragging;
  isOver: DroppableAreas | undefined;
}
