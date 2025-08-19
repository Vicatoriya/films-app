import { Footer } from '@widgets/footer/ui';
import { AuthLayoutProps } from '../model/types';

const AuthLayout = ({ title, children, sidebarContent }: AuthLayoutProps) => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-1 flex-col lg:flex-row">
				{sidebarContent}
				<div className="flex flex-col justify-center p-6 md:p-16 flex-1">
					<h1 className="text-center text-[23px] sm:text-[35px] font-black mb-6 md:mb-10">
						{title}
					</h1>
					{children}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AuthLayout;
