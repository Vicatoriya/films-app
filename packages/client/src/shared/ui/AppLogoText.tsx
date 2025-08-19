import { LogoIcon } from '@shared/icons/LogoIcon';

interface AppLogoTextProps {
	textClasses?: string;
	logoClasses?: string;
}

export const AppLogoText: React.FC<AppLogoTextProps> = ({
	textClasses = 'text-base',
	logoClasses = 'h-auto',
}) => (
	<div
		className={`flex items-center gap-1  relative z-10 text-center ${textClasses}`}
	>
		<div className={`${logoClasses} flex-shrink-0`}>
			<LogoIcon />
		</div>
		<span className="tracking-tighter hebrew-font font-bold">ModsenFilms</span>
	</div>
);
