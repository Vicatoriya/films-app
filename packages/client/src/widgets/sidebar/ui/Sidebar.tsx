import UserProfile from '@entities/user/ui/UserProfile';
import { sidebarItems } from '../config/sidebar';
import SidebarNavLink from './SidebarNavLink';
import ExitIcon from '@shared/icons/ExitIcon';
import { FC } from 'react';

interface SidebarProps {
	onSignOutClick: () => void;
}

const Sidebar: FC<SidebarProps> = ({ onSignOutClick }) => {
	return (
		<aside className="min-w-60 h-full p-3 flex flex-col items-center">
			<nav className="w-full pb-10 border-b border-b-[#0000001A]">
				{sidebarItems.map((item) => (
					<SidebarNavLink key={item.label} {...item} />
				))}
			</nav>
			<div className="w-full mt-6 flex flex-col space-y-12">
				<UserProfile name="Ivan Ivanov" />
				<SidebarNavLink
					label="Sign out"
					onClick={onSignOutClick}
					icon={ExitIcon}
				/>
			</div>
		</aside>
	);
};

export default Sidebar;
