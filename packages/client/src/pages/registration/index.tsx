import { RegistrationForm } from '@features/registration/index';
import { RegistrationSidebar } from '@widgets/registration-sidebar';
import { AuthLayout } from '@widgets/auth-layout';

export const RegistrationPage = () => {
	return (
		<AuthLayout
			title="Create an account"
			sidebarContent={<RegistrationSidebar />}
		>
			<RegistrationForm />
		</AuthLayout>
	);
};
