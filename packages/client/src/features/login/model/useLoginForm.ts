import { useFormik, FormikErrors } from 'formik';
import { useMutation } from '@apollo/client';
import { loginSchema, LoginFormValues } from './schema';
import { formatPhoneNumberInput } from '@shared/lib/formatPhoneNumberInput';
import { LOGIN_USER } from './mutations';
import type { LoginUserData, LoginUserVars } from '@entities/user/model';
import type { ApolloError, FetchResult } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

export const useLoginForm = () => {
	const navigate = useNavigate();
	const [loginUser, { loading, error, data }] = useMutation<
		LoginUserData,
		LoginUserVars
	>(LOGIN_USER);

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
		onSubmit: async (values: LoginFormValues, { setSubmitting }) => {
			try {
				const response: FetchResult<LoginUserData> = await loginUser({
					variables: {
						email: values.identifier.includes('@') ? values.identifier : null,
						phone: values.identifier.includes('@')
							? null
							: formatPhoneNumberInput(values.identifier),
						password: values.password,
					},
				});

				if (!response.data) {
					throw new Error('No data returned from server');
				}

				console.log('User logged in:', response.data.login);

				await navigate('/films');
			} catch (e) {
				const apolloError = e as ApolloError;
				console.error('Login error:', apolloError);
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

	return { ...formik, formatIdentifierInput, loading, error, data };
};
