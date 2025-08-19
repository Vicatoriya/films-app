export interface VideoData {
	id: number;
	title: string;
	author: string;
	views: string;
	uploadTime: string;
	thumbnailSrc: string;
	authorImage: string;
	duration: string;
	videoUrl: string;
	description: string;
	cast: string[];
	rating: number;
}

export interface VideoCardProps extends VideoData {
	onCardClick: (video: VideoData) => void;
}
