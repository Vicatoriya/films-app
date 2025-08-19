const GAP = 12;
const EXTRA_BTN_WIDTH = 12;
const CONTAINER_PADDING = 24;

export function paginateCategories(
	categories: string[],
	buttonsRef: React.RefObject<HTMLButtonElement[]>,
	containerWidth: number
): string[][] {
	const pages: string[][] = [];
	let start = 0;

	while (start < categories.length) {
		const hasLeftArrow = start > 0;
		const hasRightArrow = start < categories.length - 1;

		const availableWidth =
			containerWidth -
			CONTAINER_PADDING * 2 -
			(hasLeftArrow ? EXTRA_BTN_WIDTH : 0) -
			(hasRightArrow ? EXTRA_BTN_WIDTH : 0);

		let sum = 0;
		let count = 0;

		for (let i = start; i < categories.length; i++) {
			const w = buttonsRef.current?.[i]?.offsetWidth || 0;
			const gap = count > 0 ? GAP : 0;
			if (sum + w + gap > availableWidth) break;
			sum += w + gap;
			count++;
		}

		if (count === 0) break;

		pages.push(categories.slice(start, start + count));
		start += count;
	}

	return pages;
}
