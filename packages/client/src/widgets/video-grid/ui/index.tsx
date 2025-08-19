import VideoCard from '@entities/video/ui/VideoCard';
import { VideoCardGridProps } from '../model/types';
import { useEffect, useState } from 'react';
import VideoCardSkeleton from '@entities/video/ui/VideoCardSkeleton';

const VideoCardGrid: React.FC<VideoCardGridProps> = ({ videoData }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10 px-6">
				{Array.from({ length: 9 }).map((_, i) => (
					<VideoCardSkeleton key={i} />
				))}
			</div>
		);
	}
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10 px-6">
			{videoData.map((video) => (
				<VideoCard
					key={video.id}
					title={video.title}
					author={video.author}
					views={video.views}
					uploadTime={video.uploadTime}
					thumbnailSrc={video.thumbnailSrc}
					duration={video.duration}
					authorImage={video.authorImage}
				/>
			))}
		</div>
	);
};

export default VideoCardGrid;
