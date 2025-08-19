import { VideoData } from '@entities/video/model/types';

export interface VideoPlayerModalProps {
	isOpen: boolean;
	onClose: () => void;
	video: VideoData | null;
}
