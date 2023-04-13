import React from 'react';
import { ISelected } from '../../types';
import { Tab } from './Tab';

interface Props<T> {
  tabs: ISelected<T>[];
  selected: T;
  setSelected: React.Dispatch<React.SetStateAction<T>>;
}

export const TabsBar = <T,>({ tabs, selected, setSelected }: Props<T>) => {
  return (
    <div className="flex bg-gray rounded-[6px] p-[1px] h-[38px]">
      {tabs.map((tab) => (
        <Tab
          label={tab.label}
          selected={tab.value === selected}
          key={tab.label}
          icon={tab.icon}
          onClick={() => setSelected(tab.value)}
        />
      ))}
    </div>
  );
};
