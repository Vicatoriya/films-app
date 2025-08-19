import { VideoData } from '@entities/video/model/types';

export interface VideoCardGridProps {
	videoData: VideoData[];
	onCardClick: (video: VideoData) => void;
}
