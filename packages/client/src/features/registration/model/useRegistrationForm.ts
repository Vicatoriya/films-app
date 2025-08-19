import { useFormik, FormikErrors } from 'formik';
import { useMutation } from '@apollo/client';
import { RegistrationFormValues, registrationSchema } from './schema';
import { REGISTER_USER } from '../api/registration.gql';
import type { ApolloError, FetchResult } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import type {
	RegisterUserData,
	RegisterUserVars,
} from '@entities/user/model/types';

export const useRegistrationForm = () => {
	const navigate = useNavigate();
	const [registerUser, { loading, error, data }] = useMutation<
		RegisterUserData,
		RegisterUserVars
	>(REGISTER_USER);

	const formik = useFormik<RegistrationFormValues>({
		initialValues: {
			name: '',
			email: '',
			phoneNumber: '',
			password: '',
			confirmPassword: '',
		},
		onSubmit: async (values: RegistrationFormValues, { setSubmitting }) => {
			try {
				const response: FetchResult<RegisterUserData> = await registerUser({
					variables: {
						name: values.name,
						email: values.email || null,
						phone: values.phoneNumber || null,
						password: values.password,
					},
				});

				if (!response.data) {
					throw new Error('No data returned from server');
				}
				console.log('User registered:', response.data.register);
				await navigate('/');
			} catch (e) {
				const apolloError = e as ApolloError;
				console.error('Registration error:', apolloError);
			} finally {
				setSubmitting(false);
			}
		},
		validate: (values) => {
			const result = registrationSchema.safeParse(values);
			if (result.success) {
				return {};
			}
			const formikErrors: FormikErrors<RegistrationFormValues> = {};
			result.error.issues.forEach((issue) => {
				const field = issue.path[0] as keyof RegistrationFormValues;
				if (field) {
					formikErrors[field] = issue.message;
				}
			});
			return formikErrors;
		},
	});

	return { ...formik, loading, error, data };
};
