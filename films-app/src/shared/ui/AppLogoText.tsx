import { LogoIcon } from '@shared/icons/LogoIcon';

interface AppLogoTextProps {
	textSizeClasses?: string;
	logoWidthClasses?: string;
}

export const AppLogoText: React.FC<AppLogoTextProps> = ({
	textSizeClasses = 'text-base',
	logoWidthClasses = 'w-6 h-auto',
}) => (
	<div
		className={`flex items-center gap-1 tracking-tighter hebrew-font font-bold relative z-10 text-center ${textSizeClasses}`}
	>
		<div className={`${logoWidthClasses} flex-shrink-0 min-w-18`}>
			<LogoIcon />
		</div>
		ModsenFilms
	</div>
);
