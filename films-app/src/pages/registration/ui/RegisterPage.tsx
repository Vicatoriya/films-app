import { RegistrationForm } from '@features/registration/index';
import { RegistrationSidebar } from '@widgets/RegistrationSidebar/ui/RegistrationSidebar';
import { AuthLayout } from '@widgets/AuthLayout/ui/AuthLayout';

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
