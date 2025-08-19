import { VideoCardProps } from '../model/types';

const VideoCard: React.FC<VideoCardProps> = ({
	title,
	author,
	views,
	uploadTime,
	thumbnailSrc,
	duration,
	authorImage,
	onCardClick,
	...videoData
}) => {
	return (
		<div
			onClick={() =>
				onCardClick({
					title,
					author,
					views,
					uploadTime,
					duration,
					authorImage,
					thumbnailSrc,
					...videoData,
				})
			}
		>
			<div className="relative">
				<img
					src={thumbnailSrc}
					alt={title}
					className="w-full h-50 object-cover rounded-xl"
					onError={(e) => {
						(e.target as HTMLImageElement).src =
							`https://placehold.co/320x160/cccccc/000000?text=No+Image`;
					}}
				/>
				<span className="absolute bg-[#000000CC] bottom-2 right-2 text-white font-medium text-xs px-1 h-[18px] rounded-sm tracking-[0.35px]">
					{duration}
				</span>
			</div>
			<div className="flex pt-3 gap-3">
				<img
					src={authorImage}
					alt="Author"
					className="w-[36px] h-[36px] object-cover flex-shrink-0 rounded-[18px]"
					onError={(e) => {
						(e.target as HTMLImageElement).src =
							`https://placehold.co/320x160/cccccc/000000?text=No`;
					}}
				/>
				<div>
					<h3 className="text-[15px] font-semibold text-[#0F0F0F] mb-1">
						{title}
					</h3>
					<h4 className="text-sm text-[#606060]">{author}</h4>
					<div className="text-sm text-[#606060] flex items-center space-x-2">
						<span>{views} views</span>
						<span className="w-1 h-1 bg-[#606060] rounded-full"></span>
						<span>{uploadTime}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
