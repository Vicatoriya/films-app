import React from 'react';
import { CategoryFilterButtonProps } from '../model/types';

const CategoryFilterButton: React.FC<CategoryFilterButtonProps> = ({
	category,
	isActive,
	onClick,
	className,
	ref,
}) => {
	return (
		<button
			type="button"
			ref={ref}
			onClick={() => onClick(category)}
			className={`${className} px-3 h-8 text-sm rounded-lg transition-colors duration-200 whitespace-nowrap ${
				isActive ? 'bg-[#0F0F0F] text-white' : 'bg-[#0000000D] text-[#0F0F0F] '
			}`}
		>
			{category}
		</button>
	);
};

export default CategoryFilterButton;
