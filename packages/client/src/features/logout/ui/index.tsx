import { FC } from 'react';
import { ExitConfirmModalProps } from '../model/types';
import ModalContainer from '@shared/ui/ModalContainer';
import CloseIcon from '@shared/icons/CloseIcon';

const ExitConfirmModal: FC<ExitConfirmModalProps> = ({
	isOpen,
	onClose,
	onConfirm,
}) => {
	return (
		<ModalContainer isOpen={isOpen} onClose={onClose}>
			<div className="flex flex-col">
				<button
					type="button"
					onClick={onClose}
					aria-label="Закрыть"
					className="self-end"
				>
					<CloseIcon />
				</button>
				<div className="text-center mb-10 mt-8">
					<h2 className="text-xl font-semibold text-[#282828] roboto-font">
						Do you really want to get out?
					</h2>
				</div>
				<div className="flex justify-center space-x-8">
					<button
						type="button"
						onClick={onClose}
						className="px-9 py-3 rounded-md border border-[2px] border-[#5F6980] text-[#5F6980] font-semibold leading-7 tracking-[-0.2px]"
					>
						Cancel
					</button>
					<button
						type="submit"
						onClick={onConfirm}
						className="px-9 py-3 rounded-md bg-[#FD7E14] text-white font-semibold leading-7 tracking-[-0.2px]"
					>
						Confirm
					</button>
				</div>
			</div>
		</ModalContainer>
	);
};

export default ExitConfirmModal;
