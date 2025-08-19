type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	label: string;
};

export const Button: React.FC<ButtonProps> = ({ label, type, ...props }) => {
	return (
		<button
			type={type}
			{...props}
			className="
        bg-[#F48023]
        hover:bg-orange-500 
        disabled:bg-[#F4802399]
        rounded-[76px] 
        sm:h-15
        h-[50px]
        px-2 
        text-white 
        font-bold 
        disabled:cursor-not-allowed 
        text-lg
        transition
      "
		>
			{label}
		</button>
	);
};
