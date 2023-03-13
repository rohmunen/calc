import React from 'react';
import classnames from 'classnames';
import {
	ButtonWidth,
	ButtonHeight,
	ColSpan,
	ButtonColors,
	BUTTON_SIZE_MAP,
	BUTTON_HEIGHT_MAP,
	COL_SPAN_MAP,
	BUTTON_COLOR_MAP,
} from './models';

interface Props {
	children: React.ReactNode;
	onClick: () => void;
	width: ButtonWidth;
	height: ButtonHeight;
	colSpan: ColSpan;
	color: ButtonColors;
}

export const Button = ({
	children,
	onClick,
	width,
	height,
	color,
	colSpan,
}: Props) => {
	return (
		<button
			className={classnames(
				BUTTON_SIZE_MAP[width],
				BUTTON_HEIGHT_MAP[height],
				COL_SPAN_MAP[colSpan],
				BUTTON_COLOR_MAP[color],
				'flex justify-center items-center border-[1px] border-gray-light rounded-[6px]'
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

Button.width = ButtonWidth;
Button.height = ButtonHeight;
Button.colSpan = ColSpan;
Button.color = ButtonColors;

Button.defaultProps = {
	width: ButtonWidth.FULL,
	height: ButtonHeight.MD,
	colSpan: ColSpan.ONE,
	color: ButtonColors.WHITE,
};
