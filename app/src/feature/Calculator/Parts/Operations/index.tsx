import React from 'react';
import { useAppDispatch } from '~/src/hooks';
import { Button } from '../../../../components/Button';
import { operationsButtons } from './constants';
import { OperationsLayout } from './OperationsLayout';

export const Operations = () => {
  const dispatch = useAppDispatch();

  return (
    <OperationsLayout>
      {operationsButtons.map((operation) => (
        <Button
          key={operation.symbol}
          onClick={() => {
            dispatch(operation.action);
          }}>
          {operation.symbol}
        </Button>
      ))}
    </OperationsLayout>
  );
};
