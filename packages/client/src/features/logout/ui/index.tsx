import { FC } from 'react';
import { ExitConfirmModalProps } from '../model/types';
import ModalContainer from '@shared/ui/ModalContainer';

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
					<svg
						width="17"
						height="15"
						viewBox="0 0 17 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.48975 13.5498L14.5106 1.45042"
							stroke="#F48023"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<path
							d="M2.15137 1.34326L8.17864 7.40993"
							stroke="#F48023"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<path
							d="M13.8225 14.5095C14.2117 14.9013 14.8428 14.9013 15.2321 14.5095C15.6213 14.1177 15.6213 13.4825 15.2321 13.0907L13.8225 14.5095ZM8.5 7.7334L7.7952 8.4428L13.8225 14.5095L14.5273 13.8001L15.2321 13.0907L9.2048 7.02399L8.5 7.7334Z"
							fill="#F48023"
						/>
					</svg>
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
