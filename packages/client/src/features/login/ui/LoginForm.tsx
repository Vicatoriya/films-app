import { useLoginForm } from '../model/useLoginForm';
import { Input } from '@shared/ui/Input';
import { Button } from '@shared/ui/Button';
import { Link } from 'react-router-dom';
import { Toast } from '@widgets/Toast/ui/Toast';

export const LoginForm = () => {
	const formik = useLoginForm();

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="flex flex-col gap-6 w-full max-w-[450px] mx-auto"
		>
			<Input
				id="identifier-input"
				name="identifier"
				placeholder="Phone number, email address"
				value={formik.values.identifier}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					const formattedValue = formik.formatIdentifierInput(e.target.value);
					void formik.setFieldValue('identifier', formattedValue);
				}}
				onBlur={formik.handleBlur}
				type="text"
				error={formik.errors.identifier}
				touched={formik.touched.identifier}
			/>

			<Input
				id="password-input"
				name="password"
				placeholder="Password"
				value={formik.values.password}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				type="password"
				error={formik.errors.password}
				touched={formik.touched.password}
			/>

			<Button type="submit" label="Log In" disabled={formik.isSubmitting} />

			<Link
				to="/reg"
				className="sm:text-lg text-[#3E70DA] hover:underline self-end"
			>
				Sign up
			</Link>
			{formik.error && (
				<Toast
					type="error"
					title="Login error"
					message={formik.error.message}
				/>
			)}
		</form>
	);
};
