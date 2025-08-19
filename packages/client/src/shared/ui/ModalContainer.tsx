import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalContainerProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	contentClassName?: string;
}

const ModalContainer: FC<ModalContainerProps> = ({
	isOpen,
	onClose,
	children,
	contentClassName = '',
}) => {
	if (!isOpen) return null;

	return createPortal(
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70 backdrop-blur-sm"
			onClick={onClose}
		>
			<div
				className={`bg-white rounded-xl shadow-2xl transition-all duration-300 transform scale-100 opacity-100 p-6 max-w-4xl mx-4 sm:mx-0 ${contentClassName}`}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>,
		document.body
	);
};

export default ModalContainer;
