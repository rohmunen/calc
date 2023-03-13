export enum Variant {
	DEFAULT = 'default',
	INACTIVE = 'inactive',
	IN_CONSTRUCTOR = 'inConstructor',
}

export const VARIANTS_MAP: Record<Variant, string> = {
	[Variant.DEFAULT]: 'shadow-md',
	[Variant.INACTIVE]: 'opacity-50',
	[Variant.IN_CONSTRUCTOR]: 'bg-white',
};