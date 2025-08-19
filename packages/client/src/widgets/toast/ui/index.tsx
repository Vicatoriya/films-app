import React from 'react';
import { ToastProps, ToastStyle, ToastType } from '../model/types';

const typeStyles: Record<ToastType, ToastStyle> = {
	success: {
		container: 'border border-[#17A100] bg-[#F6FFF9]',
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="24"
					height="24"
					rx="6"
					fill="url(#paint0_linear_20_2474)"
				/>
				<path
					d="M8.5 12.5L10.5 14.5L15.5 9.5"
					stroke="white"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_20_2474"
						x1="12"
						y1="0"
						x2="12"
						y2="24"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#48CA93" />
						<stop offset="1" stopColor="#48BACA" />
					</linearGradient>
				</defs>
			</svg>
		),
	},
	error: {
		container: 'border border-[#FF0000] bg-[#FFF5F366]',
		icon: (
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					width="24"
					height="24"
					rx="6"
					fill="url(#paint0_linear_20_2480)"
				/>
				<path
					d="M15 9.00002L9 15M8.99997 9L14.9999 15"
					stroke="white"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_20_2480"
						x1="12"
						y1="0"
						x2="12"
						y2="24"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#E88B76" />
						<stop offset="1" stopColor="#CA5048" />
					</linearGradient>
				</defs>
			</svg>
		),
	},
};

export const Toast: React.FC<ToastProps> = ({ type, title, message }) => {
	const styles = typeStyles[type];

	return (
		<div
			className={`fixed z-100 top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-12 flex text-[#27303A] gap-4 rounded-xl p-5 max-w-[80%] w-85 min-w-0 ${styles.container}`}
			role="alert"
		>
			{styles.icon}
			<div>
				<h3 className="text-sm font-semibold mb-1 roboto-font truncate">
					{title}
				</h3>
				<p className="text-xs roboto-font break-words">{message}</p>
			</div>
		</div>
	);
};
