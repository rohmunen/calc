import React from 'react';
import { ISelected } from '../../types';
import { Tab } from './Tab';

interface Props {
  tabs: ISelected<number>[];
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const TabsBar = ({ tabs, selected, setSelected }: Props) => {
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
