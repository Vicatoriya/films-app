import { InputHTMLAttributes, useState } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	error?: string;
	touched?: boolean;
};

export const Input = ({
	type = 'text',
	placeholder,
	error,
	touched,
	className = '',
	id,
	...props
}: InputProps) => {
	const errorId = id ? `${id}-error` : undefined;
	const [showPassword, setShowPassword] = useState(false);
	const actualType = type === 'password' && showPassword ? 'text' : type;

	return (
		<div className="space-y-2 w-full">
			<div className="relative">
				<input
					type={actualType}
					placeholder={placeholder}
					aria-invalid={!!error}
					aria-describedby={errorId}
					id={id}
					{...props}
					className={`
            border rounded-md px-5 h-[50px] sm:h-[70px] focus:outline-none focus:ring-2 w-full transition-all duration-200
            ${touched && error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-300'}
            ${className}
            ${type === 'password' ? 'pr-12' : ''}
          `}
				/>
				{type === 'password' && (
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute top-1/2 -translate-y-1/2 right-5 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
						aria-label={showPassword ? 'Hide password' : 'Show password'}
					>
						{showPassword ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
								<path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
								<path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
								<path d="m2 2 20 20" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
								<circle cx="12" cy="12" r="3" />
							</svg>
						)}
					</button>
				)}
			</div>
			{touched && error && (
				<p id={errorId} className="text-[#EF1C5C] text-xs font-medium pl-1">
					{error}
				</p>
			)}
		</div>
	);
};
