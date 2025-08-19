import SettingsIcon from '@shared/icons/SettingsIcon';
import HomeIcon from '@shared/icons/HomeIcon';
import { SidebarNavLinkProps } from '../model/types';

export const sidebarItems: SidebarNavLinkProps[] = [
	{
		label: 'Home',
		href: '/',
		icon: HomeIcon,
	},
	{
		label: 'Settings',
		href: '/settings',
		icon: SettingsIcon,
	},
];
