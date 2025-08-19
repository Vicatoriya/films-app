import { LoginForm } from '@features/login';
import { LoginSidebar } from '@widgets/login-sidebar';
import { AuthLayout } from '@widgets/auth-layout';

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
