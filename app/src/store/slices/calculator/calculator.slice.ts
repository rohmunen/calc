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
			state.lastInput = parseFloat(state.displayNumber);
		},

		setOperation(state, action: PayloadAction<Operations>) {
			if (state.operation === null) {
				state.operation = action.payload;
			}

			if (state.expectsOperand) {
				state.operation = action.payload;
				return;
			}

			state.expectsOperand = true;

			if (state.accumulatedValue === null) {
				state.accumulatedValue = parseFloat(state.displayNumber);
				return;
			}

			const sum = operate(
				state.operation,
				state.accumulatedValue,
				parseFloat(state.displayNumber),
			);

			state.accumulatedValue = sum;
			state.displayNumber = String(sum);

			state.operation = action.payload;
		},

		handleEqualsClick(state) {
			if (!state.operation || !state.accumulatedValue || !state.lastInput) {
				return;
			}

			const sum = operate(
				state.operation,
				state.accumulatedValue,
				state.lastInput
			);

			state.accumulatedValue = sum;
			state.displayNumber = String(sum);
			state.expectsOperand = true;
		},

		addDecimalPoint(state) {
			if (!state.displayNumber.includes('.')) {
				state.displayNumber = state.displayNumber + '.';
			}
		},

		resetCalculator: () => CALCULATOR_DEFAULT_STATE,
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

export const {
	addNumber,
	setOperation,
	handleEqualsClick,
	addDecimalPoint,
	resetCalculator,
} = calculatorSlice.actions;
