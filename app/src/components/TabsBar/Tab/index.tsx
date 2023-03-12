import classnames from 'classnames';
import React from 'react';

interface Props {
	label: string;
	icon?: React.ReactNode;
	selected: boolean;
	onClick: () => void;
}

export const Tab = ({label, icon, selected, onClick}: Props) => {
	return (
		<button
			className={classnames({
				'flex items-center gap-[8px] py-[8px] px-[12px] rounded-[5px] border-[1px] border-transparent': true,
				'bg-white border-[1px] border-gray-light [&>svg>*]:stroke-iris-100': selected,
			})}
			onClick={onClick}
		>
			{icon}
			{label}
		</button>
	);
};
