import { ButtonHeight, ButtonWidth, ColSpan } from './components/Button/models';

export interface ICalculatorButton {
  symbol: string;
  onClick: () => void;
  width?: ButtonWidth;
  height?: ButtonHeight;
  colSpan?: ColSpan;
}

export interface ISelected<T> {
  value: T;
  label: string;
  icon?: React.ReactNode;
}

export interface DragOver {
  id: string;
  side: 'Top' | 'Bottom';
}

export interface IDroppableContext {
  dragOver: DragOver | undefined;
  setDragginOver: React.Dispatch<React.SetStateAction<DragOver | undefined>>;
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}
