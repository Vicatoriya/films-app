import { LoginForm } from '@features/login/index';
import { LoginSidebar } from '@widgets/LoginSidebar/ui/LoginSidebar';
import { AuthLayout } from '@widgets/AuthLayout/ui/AuthLayout';

export const LoginPage = () => {
	return (
		<AuthLayout
			title="Log in to Modsen Films"
			sidebarContent={<LoginSidebar />}
		>
			<LoginForm />
		</AuthLayout>
	);
};
