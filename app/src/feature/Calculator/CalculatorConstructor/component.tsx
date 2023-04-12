import React, { useEffect, useState } from 'react';
import { TabsBar } from '../../../components/TabsBar';
import { constructorTabs } from './constants';
import _ from 'lodash';
import { useDroppable } from '~/src/hooks/useDroppable';
import { PartsBlock } from './PartsBlock';
import { ConstructorDroppableArea } from './ConstructorDroppableArea';
import { useAppDispatch } from '~/src/hooks';
import { resetCalculator } from '~/src/store/slices/calculator';

export const CalculatorConstructor = () => {
  const dispatch = useAppDispatch();
  const [selectedTab, setSelectedTab] = useState(2);

  useEffect(() => {
    dispatch(resetCalculator());
  }, [selectedTab]);

  const [handlePartDrop, constructed, setConstructed, draggingOver, setDraggingOver] =
    useDroppable();

  return (
    <div className="flex flex-col gap-[30px] w-full max-w-[540px]">
      <div className="w-fit self-center min-[700px]:self-end">
        <TabsBar tabs={constructorTabs} selected={selectedTab} setSelected={setSelectedTab} />
      </div>
      <div
        className={`flex justify-end max-[700px]:items-center max-[700px]:flex-col gap-[56px] ${
          selectedTab === 2 && 'disable-buttons'
        }`}>
        {selectedTab === 2 ? (
          <>
            <PartsBlock constructed={constructed} setDraggingOver={setDraggingOver} />
            <ConstructorDroppableArea
              handlePartDrop={handlePartDrop}
              constructed={constructed}
              draggingOver={draggingOver}
              setDraggingOver={setDraggingOver}
              setConstructed={setConstructed}
            />
          </>
        ) : (
          <div className="max-w-[244px] w-full flex flex-col gap-[8px] border-[2px] border-transparent">
            {constructed.map((part) => (
              <div key={part.id} className="p-[4px]">
                {part.element}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
