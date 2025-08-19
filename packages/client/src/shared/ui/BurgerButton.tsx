interface BurgerButtonProps {
	onClick: () => void;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ onClick }) => {
	return (
		<button
			type="button"
			onClick={onClick}
			className="w-[30px] flex flex-col gap-[5px] sm:hidden"
		>
			<span className="h-[3px] bg-[#F48023] w-[17px] rounded-r-full"></span>
			<span className="h-[3px] bg-[#F48023] w-[30px] rounded-r-full"></span>
			<span className="h-[3px] bg-[#F48023] w-[17px] rounded-r-full self-end"></span>
		</button>
	);
};

export default BurgerButton;
