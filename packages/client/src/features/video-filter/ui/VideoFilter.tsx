import { useVideoFilter } from '../model/useVideoFilter';
import { videoCategories } from '../config/categories';
import CategoryFilterButton from './CategoryFilterButton';

const VideoFilter = () => {
	const {
		containerRef,
		buttonsRef,
		activeCategory,
		visibleCategories,
		showLeftArrow,
		showRightArrow,
		handleCategoryClick,
		handlePrev,
		handleNext,
	} = useVideoFilter();

	return (
		<div>
			<div className="absolute -top-[9999px] -left-[9999px] flex gap-3">
				{videoCategories.map((cat, i) => (
					<CategoryFilterButton
						key={`measure-${cat}`}
						ref={(el) => {
							buttonsRef.current[i] = el!;
						}}
						category={cat}
						isActive={false}
						onClick={() => {}}
					/>
				))}
			</div>

			<div className="relative max-w-full overflow-hidden" ref={containerRef}>
				{showLeftArrow && (
					<button
						type="button"
						onClick={handlePrev}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M14.6 18.4L15.3 17.7L9.7 12.1L15.4 6.4L14.7 5.7L8.3 12.1L14.6 18.4Z"
								fill="#0F0F0F"
							/>
						</svg>
					</button>
				)}

				<div
					className={`flex items-center whitespace-nowrap py-3 px-6 gap-3 justify-evenly
          ${showLeftArrow ? 'pl-9' : ''}
          ${showRightArrow ? 'pr-9' : ''}`}
				>
					{visibleCategories.map((cat) => (
						<CategoryFilterButton
							key={cat}
							category={cat}
							isActive={activeCategory === cat}
							onClick={handleCategoryClick}
						/>
					))}
				</div>

				{showRightArrow && (
					<button
						type="button"
						onClick={handleNext}
						className="absolute right-0 top-1/2 -translate-y-1/2"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_20_3998)">
								<path
									d="M9.4001 18.4L8.7001 17.7L14.3001 12.1L8.6001 6.4L9.3001 5.7L15.7001 12.1L9.4001 18.4Z"
									fill="#0F0F0F"
								/>
							</g>
							<defs>
								<clipPath id="clip0_20_3998">
									<rect width="24" height="24" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</button>
				)}
			</div>
		</div>
	);
};

export default VideoFilter;
