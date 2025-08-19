import Header from '@widgets/header';
import Sidebar from '@widgets/sidebar/ui/Sidebar';
import VideoFilter from '@features/video-filter/ui/VideoFilter';
import VideoCardGrid from '@widgets/video-grid/ui';
import { useModal } from '@shared/lib/useModal';
import ExitConfirmModal from '@features/logout/ui';
import { useLogout } from '@features/logout/model/useLogout';
import { useNavigate } from 'react-router-dom';

const videoData = Array.from({ length: 12 }).map((_, i) => ({
	id: i + 1,
	title:
		'[Playlist] Soothing 24-hour playlist of jazz music and rain sounds for work, study, relax and focus.',
	author: 'In The Rain',
	views: `${Math.floor(Math.random() * 5) + 1}M`,
	uploadTime: `${Math.floor(Math.random() * 11) + 1} months ago`,
	thumbnailSrc: `some`,
	authorImage: 'some',
	duration: '23:59:40',
}));

export const MainPage = () => {
	const navigate = useNavigate();
	const { isOpen, openModal, closeModal } = useModal();

	const { logout } = useLogout();

	const handleConfirmExit = () => {
		closeModal();
		void logout().then(() => navigate('/login'));
	};

	return (
		<div className="flex flex-col min-h-screen max-w-screen">
			<Header />
			<div className="flex w-full">
				<Sidebar onSignOutClick={openModal} />
				<main className="p-4 md:p-6 w-full">
					<div className="mb-6">
						<VideoFilter />
					</div>
					<VideoCardGrid videoData={videoData} />
				</main>
			</div>
			<ExitConfirmModal
				isOpen={isOpen}
				onClose={closeModal}
				onConfirm={handleConfirmExit}
			/>
		</div>
	);
};
