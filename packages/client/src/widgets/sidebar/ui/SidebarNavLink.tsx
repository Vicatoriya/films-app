import { FC } from 'react';
import { SidebarNavLinkProps } from '../model/types';

const SidebarNavLink: FC<SidebarNavLinkProps> = ({
	label,
	href,
	icon: Icon,
	onClick,
}) => {
	const commonClasses = `flex items-center space-x-6 p-3 rounded-[10px] text-[#0F0F0F] hover:bg-[#0000000D] transition-colors`;

	if (href) {
		return (
			<a href={href} className={commonClasses}>
				<Icon />
				<span className="font-medium text-sm">{label}</span>
			</a>
		);
	}

	return (
		<button onClick={onClick} className={commonClasses} type="button">
			<Icon />
			<span className="font-medium text-sm">{label}</span>
		</button>
	);
};

export default SidebarNavLink;
