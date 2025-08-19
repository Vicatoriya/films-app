import { VideoCardProps } from '@entities/video/model/types';

export interface VideoCardGridProps {
	videoData: (VideoCardProps & { id: number })[];
}
