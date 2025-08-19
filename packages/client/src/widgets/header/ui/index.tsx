import Search from '@features/search/ui';
import { ProfileIcon } from '@shared/icons/ProfileIcon';
import { AppLogoText } from '@shared/ui/AppLogoText';
import BurgerButton from '@shared/ui/BurgerButton';
import { HeaderProps } from '../model/types';

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
	return (
		<header className="py-3 px-3 sm:pr-10 md:pr-12">
			<div className="flex flex-col sm:flex-row sm:items-center justify-between">
				<div className="flex items-center justify-between w-full sm:w-auto">
					<AppLogoText
						textClasses="text-[#F4802399] font-bold text-[22px] sm:text-2xl"
						logoClasses="w-7 sm:w-12"
					/>
					<BurgerButton onClick={onMenuClick} />
				</div>
				<div className="mt-6 sm:mt-0 flex-1 flex justify-center sm:mx-8">
					<Search />
				</div>
				<div className="hidden sm:block">
					<ProfileIcon width={24} />
				</div>
			</div>
		</header>
	);
};

export default Header;
