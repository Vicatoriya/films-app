import { AppLogoText } from '@shared/ui/AppLogoText';
import image from '@shared/images/Glossy.png';

export const LoginSidebar = () => {
	return (
		<div
			className="flex flex-col items-center justify-center bg-gradient-to-b from-[#3E70DA] to-[#0C2A6A] text-white px-2 py-12 md:px-10 relative overflow-hidden gap-8 lg:gap-24
                   w-full lg:w-2/5 min-h-95"
		>
			<div className="absolute -top-[190px] -left-[219px] w-140 h-140 border border-[#0575E6] rounded-full hidden lg:block" />
			<div className="absolute -top-[164px] -left-[138px] w-140 h-140 border border-[#0575E6] rounded-full hidden lg:block" />
			<AppLogoText
				textSizeClasses="text-4xl sm:text-5xl xl:text-6xl 2xl:text-[68px]"
				logoWidthClasses="w-8 sm:w-[78px] h-[46px] lg:w-[100px] lg:h-[66px] flex-shrink-0"
			/>
			<img
				src={image}
				alt="Player"
				className="opacity-80 w-[185px] h-[208px] lg:w-[313px] lg:h-[355px]"
				style={{
					mixBlendMode: 'screen',
				}}
			/>
		</div>
	);
};
