import { Ref } from 'react';

export interface CategoryFilterButtonProps {
	category: string;
	isActive: boolean;
	onClick: (category: string) => void;
	className?: string;
	ref?: Ref<HTMLButtonElement>;
}

export interface UseVideoFilterReturn {
	containerRef: React.RefObject<HTMLDivElement | null>;
	buttonsRef: React.RefObject<HTMLButtonElement[]>;
	activeCategory: string;
	visibleCategories: string[];
	showLeftArrow: boolean;
	showRightArrow: boolean;
	handleCategoryClick: (cat: string) => void;
	handlePrev: () => void;
	handleNext: () => void;
}
