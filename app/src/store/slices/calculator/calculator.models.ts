export interface ICalculatorSlice {
  accumulatedValue: number | null;
  expectsOperand: boolean;
	displayNumber: string;
  lastInput: number | null;
	operation: Operations;
}

export type Operations = '+' | '-' | '/' | 'x' | null;
