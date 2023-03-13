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

export const COL_SPAN_MAP: Record<ColSpan, string> = {
	[ColSpan.ONE]: 'col-span-1',
	[ColSpan.TWO]: 'col-span-2',
	[ColSpan.THREE]: 'col-span-3',
};

export const BUTTON_SIZE_MAP: Record<ButtonWidth, string> = {
	[ButtonWidth.FULL]: 'w-full',
	[ButtonWidth.SM]: 'w-[52px]',
	[ButtonWidth.MD]: 'w-[72px]',
	[ButtonWidth.LG]: 'w-[152px]',
	[ButtonWidth.XL]: 'w-[232px]',
};

export const BUTTON_HEIGHT_MAP: Record<ButtonHeight, string> = {
	[ButtonHeight.MD]: 'h-[48px]',
	[ButtonHeight.LG]: 'h-[64px]',
};

export const BUTTON_COLOR_MAP: Record<ButtonColors, string> = {
	[ButtonColors.WHITE]: 'bg-white',
	[ButtonColors.PURPLE]: 'bg-purple text-white border-[2px] border-transparent',
};
