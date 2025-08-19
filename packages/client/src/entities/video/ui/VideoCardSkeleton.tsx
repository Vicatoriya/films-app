const VideoCardSkeleton: React.FC = () => {
	return (
		<div className="animate-pulse w-full">
			<div className="h-50 rounded-sm bg-[#938D8D14] mb-4" />
			<div className="h-10 rounded-sm bg-[#938D8D14] mb-3" />
			<div className="h-6 rounded-sm bg-[#938D8D14]" />
		</div>
	);
};

export default VideoCardSkeleton;
