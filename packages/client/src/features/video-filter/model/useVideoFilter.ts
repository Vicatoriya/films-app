import { useEffect, useRef, useState } from 'react';
import { videoCategories } from '../config/categories';
import { paginateCategories } from '../lib/paginateCategories';
import { UseVideoFilterReturn } from './types';

export function useVideoFilter(): UseVideoFilterReturn {
	const [activeCategory, setActiveCategory] = useState('All');
	const [pages, setPages] = useState<string[][]>([]);
	const [pageIndex, setPageIndex] = useState(0);
	const [containerWidth, setContainerWidth] = useState(0);

	const containerRef = useRef<HTMLDivElement>(null);
	const buttonsRef = useRef<HTMLButtonElement[]>([]);

	useEffect(() => {
		if (!containerRef.current) return;
		const updateWidth = () =>
			setContainerWidth(containerRef.current!.offsetWidth);
		updateWidth();
		window.addEventListener('resize', updateWidth);
		return () => window.removeEventListener('resize', updateWidth);
	}, []);

	useEffect(() => {
		if (!containerWidth) return;
		if (buttonsRef.current.length !== videoCategories.length) return;

		const newPages = paginateCategories(
			videoCategories,
			buttonsRef,
			containerWidth
		);
		setPages(newPages);
		setPageIndex(0);
	}, [containerWidth]);

	const handleCategoryClick = (cat: string) => setActiveCategory(cat);
	const handlePrev = () => setPageIndex((prev) => Math.max(prev - 1, 0));
	const handleNext = () =>
		setPageIndex((prev) => Math.min(prev + 1, pages.length - 1));

	return {
		containerRef,
		buttonsRef,
		activeCategory,
		visibleCategories: pages[pageIndex] ?? [],
		showLeftArrow: pageIndex > 0,
		showRightArrow: pageIndex < pages.length - 1,
		handleCategoryClick,
		handlePrev,
		handleNext,
	};
}
