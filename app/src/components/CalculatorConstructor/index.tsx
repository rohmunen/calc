import React, {useState} from 'react';
import {TabsBar} from '../TabsBar';
import {constructorTabs} from './constants';
import _ from 'lodash';
import {useDroppable} from '~/src/hooks/useDroppable';
import {PartsBlock} from './PartsBlock';
import {ConstructorDroppableArea} from './ConstructorDroppableArea';

export const CalculatorConstructor = () => {
	const [selectedTab, setSelectedTab] = useState(2);

	const [
		handlePartDrop,
		constructed,
		setConstructed,
		draggingOver,
		setDraggingOver,
	] = useDroppable();

	return (
		<div className="flex flex-col gap-[30px] w-full max-w-[540px]">
			<div className="self-end">
				<TabsBar
					tabs={constructorTabs}
					selected={selectedTab}
					setSelected={setSelectedTab}
				/>
			</div>
			<div
				className={`flex justify-end gap-[56px] ${
					selectedTab === 2 && 'disable-buttons'
				}`}
			>
				{selectedTab === 2 ? (
					<>
						<PartsBlock
							constructed={constructed}
							setDraggingOver={setDraggingOver}
						/>
						<ConstructorDroppableArea
							handlePartDrop={handlePartDrop}
							constructed={constructed}
							draggingOver={draggingOver}
							setDraggingOver={setDraggingOver}
							setConstructed={setConstructed}
						/>
					</>
				) : (
					<div className="max-w-[242px] w-full flex flex-col gap-[8px]">
						{constructed.map((part) => part.element)}
					</div>
				)}
			</div>
		</div>
	);
};
