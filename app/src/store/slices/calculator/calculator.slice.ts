import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '~/src/store';
import {ICalculatorSlice, Operations} from './calculator.models';
import {operate} from './utils';

const CALCULATOR_DEFAULT_STATE: ICalculatorSlice = {
	expectsOperand: false,
	accumulatedValue: null,
	displayNumber: '0',
	operation: null,
	lastInput: null,
};

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: CALCULATOR_DEFAULT_STATE,
	reducers: {
		addNumber(state, action: PayloadAction<number>) {
			if (state.expectsOperand) {
				state.displayNumber = String(action.payload);
				state.expectsOperand = false;
			} else {
				state.displayNumber =
					state.displayNumber === '0'
						? String(action.payload)
						: state.displayNumber + action.payload;
			}
		},

		setOperation(state, action: PayloadAction<Operations>) {
			if (!(action.payload === '=') || state.lastInput === null) {
				state.lastInput = parseFloat(state.displayNumber);
			}
			if (state.accumulatedValue === null) {
				state.accumulatedValue = state.lastInput;
			} else {
				if (state.operation) {
					const sum = operate(
						state.operation,
						state.accumulatedValue,
						state.lastInput
					);
					state.accumulatedValue = sum;
					state.displayNumber = String(sum);
				}
			}
			if (!(action.payload === '=')) {
				state.lastInput = null;
				state.expectsOperand = true;
				state.operation = action.payload;
			}
		},

		addDecimalPoint(state) {
			if (!state.displayNumber.includes('.')) {
				state.displayNumber = state.displayNumber + '.';
			}
		},
	},
});

export const calculatorReducer = calculatorSlice.reducer;

const calculatorState = (state: RootState) => state.calculator;

export const selectDisplayNumber = createSelector(
	calculatorState,
	({displayNumber}) => ({
		displayNumber,
	})
);

export const {addNumber, setOperation, addDecimalPoint} =
	calculatorSlice.actions;
