import { useFormik, FormikErrors } from 'formik';
import { registrationSchema, RegistrationFormValues } from './schema';
import { useNavigate } from 'react-router-dom';
import { userStore } from '@entities/user/model/user-store';

export const useRegistrationForm = () => {
	const navigate = useNavigate();

	const formik = useFormik<RegistrationFormValues>({
		initialValues: {
			name: '',
			email: '',
			phoneNumber: '',
			password: '',
			confirmPassword: '',
		},
		onSubmit: async (values, { setSubmitting }) => {
			try {
				await userStore.register({
					name: values.name,
					email: values.email || undefined,
					phone: values.phoneNumber || undefined,
					password: values.password,
				});

				if (userStore.isAuthenticated) {
					void navigate('/films');
				}
			} finally {
				setSubmitting(false);
			}
		},
		validate: (values) => {
			const result = registrationSchema.safeParse(values);
			if (result.success) return {};

			const formikErrors: FormikErrors<RegistrationFormValues> = {};
			result.error.issues.forEach((issue) => {
				const field = issue.path[0] as keyof RegistrationFormValues;
				if (field) formikErrors[field] = issue.message;
			});
			return formikErrors;
		},
	});

	return { ...formik, isLoading: userStore.isLoading, error: userStore.error };
};
