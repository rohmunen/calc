import React from 'react';
import classnames from 'classnames';

interface Props {
	children: React.ReactNode;
	onClick: () => void;
	width: ButtonWidth;
	height: ButtonHeight;
	colSpan: ColSpan;
	color: ButtonColors;
}

export enum ButtonWidth {
	FULL = 'full',
	SM = 'small',
	MD = 'medium',
	LG = 'large',
	XL = 'extraLarge',
}

export enum ButtonHeight {
	MD = 'medium',
	LG = 'large',
}

export enum ColSpan {
	ONE = 'one',
	TWO = 'two',
	THREE = 'three',
}

export enum ButtonColors {
	WHITE = 'white',
	PURPLE = 'purple',
}

const COL_SPAN_MAP: Record<ColSpan, string> = {
	[ColSpan.ONE]: 'col-span-1',
	[ColSpan.TWO]: 'col-span-2',
	[ColSpan.THREE]: 'col-span-3',
};

const BUTTON_SIZE_MAP: Record<ButtonWidth, string> = {
	[ButtonWidth.FULL]: 'w-full',
	[ButtonWidth.SM]: 'w-[52px]',
	[ButtonWidth.MD]: 'w-[72px]',
	[ButtonWidth.LG]: 'w-[152px]',
	[ButtonWidth.XL]: 'w-[232px]',
};

const BUTTON_HEIGHT_MAP: Record<ButtonHeight, string> = {
	[ButtonHeight.MD]: 'h-[48px]',
	[ButtonHeight.LG]: 'h-[64px]',
};

const BUTTON_COLOR_MAP: Record<ButtonColors, string> = {
	[ButtonColors.WHITE]: 'bg-white',
	[ButtonColors.PURPLE]: 'bg-purple text-white',
};

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
