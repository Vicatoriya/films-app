import { FC } from 'react';

export interface SidebarNavLinkProps {
	label: string;
	href?: string;
	onClick?: () => void;
	icon: FC<React.SVGProps<SVGSVGElement>>;
}
