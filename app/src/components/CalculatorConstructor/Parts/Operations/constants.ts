import { setOperation } from '~/src/store/slices/calculator';
import { ICalculatorButton } from '../../../../types';

export const operationsButtons = [
  { symbol: '/', action: setOperation('/') },
  { symbol: 'x', action: setOperation('x') },
  { symbol: '-', action: setOperation('-') },
  { symbol: '+', action: setOperation('+') }
];
