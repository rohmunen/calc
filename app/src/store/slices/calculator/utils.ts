import {Operations} from './calculator.models';

export const operate = (
	operator: Operations,
	accumulatedValue: number,
	displayedValue: number
) => {
	switch (operator) {
		case '+':
			return accumulatedValue + displayedValue;
		case '-':
			return accumulatedValue - displayedValue;
		case 'x':
			return accumulatedValue * displayedValue;
		case '/':
			return accumulatedValue / displayedValue;
		case '=':
      return displayedValue;
		default:
			return displayedValue;
	}
};
