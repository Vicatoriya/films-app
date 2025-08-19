import ModalContainer from '@shared/ui/ModalContainer';
import { VideoPlayerModalProps } from '../model/types';
import { FC } from 'react';

const VideoPlayerModal: FC<VideoPlayerModalProps> = ({
	isOpen,
	onClose,
	video,
}) => {
	if (!video) return null;

	return (
		<ModalContainer
			isOpen={isOpen}
			onClose={onClose}
			contentClassName="!p-0 !max-w-4xl overflow-hidden"
		>
			<div className="relative">
				<button
					type="button"
					onClick={onClose}
					className="absolute top-4 right-4 z-10 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-colors"
					aria-label="Close"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<div className="relative w-full aspect-video bg-black rounded-t-xl overflow-hidden">
					<video
						src={video.videoUrl}
						controls
						autoPlay
						className="w-full h-full object-contain"
					/>
				</div>

				<div className="p-6">
					<h2 className="text-2xl font-semibold mb-2">{video.title}</h2>
					<div className="flex items-center text-sm mb-4 flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
						<span>{video.author}</span>
						<span>{video.views} views</span>
						<span>{video.uploadTime} ago</span>
						<span className="text-yellow-500">Rating: {video.rating}/10</span>
					</div>
					<p className="mb-4 text-justify">{video.description}</p>
					<div className="mb-4">
						<span className="font-semibold">Cast: </span>
						<span>{video.cast.join(', ')}</span>
					</div>
				</div>
			</div>
		</ModalContainer>
	);
};

export default VideoPlayerModal;
