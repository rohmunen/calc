import { ColSpan } from '~/src/components/Button/models';
import { useAppDispatch } from '~/src/hooks';
import { addDecimalPoint, addNumber } from '~/src/store/slices/calculator';

export const numbersButtons = [
  {
    symbol: '7',
    action: addNumber(7)
  },
  {
    symbol: '8',
    action: addNumber(8)
  },
  {
    symbol: '9',
    action: addNumber(9)
  },
  {
    symbol: '4',
    action: addNumber(4)
  },
  {
    symbol: '5',
    action: addNumber(5)
  },
  {
    symbol: '6',
    action: addNumber(6)
  },
  {
    symbol: '1',
    action: addNumber(1)
  },
  {
    symbol: '2',
    action: addNumber(2)
  },
  {
    symbol: '3',
    action: addNumber(3)
  },
  {
    symbol: '0',
    colSpan: ColSpan.TWO,
    action: addNumber(0)
  },
  {
    symbol: ',',
    action: addDecimalPoint()
  }
];
