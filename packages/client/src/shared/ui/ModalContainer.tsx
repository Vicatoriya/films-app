import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalContainerProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const ModalContainer: FC<ModalContainerProps> = ({
	isOpen,
	onClose,
	children,
}) => {
	if (!isOpen) return null;

	return createPortal(
		<div
			className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
			onClick={onClose}
		>
			<div
				className="bg-white rounded-xl transition-all duration-300 transform scale-100 opacity-100 p-6"
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>,
		document.body
	);
};

export default ModalContainer;
