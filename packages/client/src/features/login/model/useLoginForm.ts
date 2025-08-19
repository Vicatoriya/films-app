import { useFormik, FormikErrors } from 'formik';
import { loginSchema, LoginFormValues } from './schema';
import { formatPhoneNumberInput } from '@shared/lib/formatPhoneNumberInput';
import { useNavigate } from 'react-router-dom';
import { userStore } from '@entities/user/model/user-store';

export const useLoginForm = () => {
	const navigate = useNavigate();

	const formatIdentifierInput = (rawValue: string): string => {
		if (rawValue.includes('@')) {
			return rawValue;
		}
		return formatPhoneNumberInput(rawValue);
	};

	const formik = useFormik<LoginFormValues>({
		initialValues: {
			identifier: '',
			password: '',
		},
		onSubmit: async (values, { setSubmitting }) => {
			try {
				await userStore.signIn({
					email: values.identifier.includes('@')
						? values.identifier
						: undefined,
					phone: values.identifier.includes('@')
						? undefined
						: formatPhoneNumberInput(values.identifier),
					password: values.password,
				});

				if (userStore.isAuthenticated) {
					void navigate('/films', { replace: true });
				}
			} finally {
				setSubmitting(false);
			}
		},
		validate: (values) => {
			const result = loginSchema.safeParse(values);
			if (result.success) {
				return {};
			}

			const formikErrors: FormikErrors<LoginFormValues> = {};
			result.error.issues.forEach((issue) => {
				const field = issue.path[0] as keyof LoginFormValues;
				if (field) {
					formikErrors[field] = issue.message;
				}
			});
			return formikErrors;
		},
	});

	return {
		...formik,
		formatIdentifierInput,
		isLoading: userStore.isLoading,
		error: userStore.error,
	};
};
