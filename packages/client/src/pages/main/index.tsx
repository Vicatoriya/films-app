import Header from '@widgets/header/ui';
import Sidebar from '@widgets/sidebar/ui/Sidebar';
import VideoFilter from '@features/video-filter/ui/VideoFilter';
import VideoCardGrid from '@widgets/video-grid/ui';
import { useModal } from '@shared/lib/useModal';
import ExitConfirmModal from '@features/logout/ui';
import { useLogout } from '@features/logout/model/useLogout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AppLogoText } from '@shared/ui/AppLogoText';
import { VideoData } from '@entities/video/model/types';
import VideoPlayerModal from '@features/video-player-modal/ui';

const videoData: VideoData[] = Array.from({ length: 12 }).map((_, i) => ({
	id: i + 1,
	title:
		i % 2 === 0
			? '[ФИЛЬМ] Загадочная история: Лесной призрак (2023)'
			: '[СЕРИАЛ] Городские Легенды: Тайны Подземелья. Эпизод 3',
	author: i % 3 === 0 ? 'КиноСтудия ABC' : 'Независимый Автор',
	views: `${Math.floor(Math.random() * 5) + 1}M`,
	uploadTime: `${Math.floor(Math.random() * 11) + 1} months ago`,
	thumbnailSrc: `https://placehold.co/640x360/aabbcc/ffffff?text=Movie+${i + 1}+Thumbnail`,
	authorImage: 'https://placehold.co/40x40/dddddd/000000?text=A',
	duration: `01:3${Math.floor(Math.random() * 9)}:0${Math.floor(Math.random() * 9)}`,
	videoUrl: `https://www.w3schools.com/html/mov_bbb.mp4`,
	description:
		`Это длинное и очень интересное описание фильма/сериала под номером ${i + 1}. ` +
		`Фильм рассказывает о приключениях молодого детектива, который пытается разгадать ` +
		`древнюю тайну, скрытую в глубинах старого города. ` +
		`Каждая сцена наполнена интригой, неожиданными поворотами и захватывающими моментами. ` +
		`Наслаждайтесь просмотром!`,
	cast: ['Актер 1', 'Актер 2', 'Актер 3', 'Актер 4'],
	rating: parseFloat((Math.random() * (10 - 6) + 6).toFixed(1)),
}));

export const MainPage = () => {
	const navigate = useNavigate();
	const {
		isOpen: isExitModalOpen,
		openModal: openExitModal,
		closeModal: closeExitModal,
	} = useModal();
	const {
		isOpen: isVideoModalOpen,
		openModal: openVideoModal,
		closeModal: closeVideoModal,
	} = useModal();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

	const { logout } = useLogout();

	const handleConfirmExit = () => {
		closeExitModal();
		void logout().then(() => navigate('/login'));
	};

	const handleVideoCardClick = (video: VideoData) => {
		setSelectedVideo(video);
		openVideoModal();
	};

	return (
		<div className="flex flex-col min-h-screen max-w-screen">
			<Header onMenuClick={() => setIsSidebarOpen(true)} />

			<div className="flex w-full">
				<div className="hidden sm:block">
					<Sidebar onSignOutClick={openExitModal} />
				</div>

				<main className="p-4 md:p-6 w-full">
					<div className="mb-6">
						<VideoFilter />
					</div>
					<VideoCardGrid
						videoData={videoData}
						onCardClick={handleVideoCardClick}
					/>
				</main>
			</div>

			<div
				className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 sm:hidden 
          ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
				onClick={() => setIsSidebarOpen(false)}
			>
				<div
					className={`absolute top-0 left-0 h-full w-60 bg-white shadow-lg transform transition-transform duration-300
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
					onClick={(e) => e.stopPropagation()}
				>
					<div className="px-6 pt-6 pb-3">
						<AppLogoText
							textClasses="text-[#F4802399] font-bold text-[22px] sm:text-2xl"
							logoClasses="w-7 sm:w-12"
						/>
					</div>
					<Sidebar onSignOutClick={openExitModal} />
				</div>
			</div>

			<ExitConfirmModal
				isOpen={isExitModalOpen}
				onClose={closeExitModal}
				onConfirm={handleConfirmExit}
			/>

			<VideoPlayerModal
				isOpen={isVideoModalOpen}
				onClose={closeVideoModal}
				video={selectedVideo}
			/>
		</div>
	);
};
