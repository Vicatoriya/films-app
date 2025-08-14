import { useRegistrationForm } from '../model/useRegistrationForm';
import { Input } from '@shared/ui/Input';
import { formatPhoneNumberInput } from '@shared/lib/formatPhoneNumberInput';
import { Button } from '@shared/ui/Button';

export const RegistrationForm = () => {
	const formik = useRegistrationForm();

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="flex flex-col gap-6 w-full max-w-[670px] mx-auto"
		>
			<Input
				id="name-input"
				name="name"
				placeholder="Name"
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				type="text"
				error={formik.errors.name}
				touched={formik.touched.name}
			/>
			<Input
				id="phone-number-input"
				name="phoneNumber"
				placeholder="Phone number"
				value={formik.values.phoneNumber}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					const formattedValue = formatPhoneNumberInput(e.target.value);
					void formik.setFieldValue('phoneNumber', formattedValue);
				}}
				onBlur={formik.handleBlur}
				type="tel"
				error={formik.errors.phoneNumber}
				touched={formik.touched.phoneNumber}
			/>
			<Input
				id="email-input"
				name="email"
				placeholder="Email"
				value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				type="email"
				error={formik.errors.email}
				touched={formik.touched.email}
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
			<Input
				id="confirm-password-input"
				name="confirmPassword"
				placeholder="Confirm password"
				value={formik.values.confirmPassword}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				type="password"
				error={formik.errors.confirmPassword}
				touched={formik.touched.confirmPassword}
			/>
			<p className="text-[#00000099] text-sm sm:text-base">
				Sign up to get access to a powerful search engine for all genres, years
				and ratings. Our service combines thousands of movies in one convenient
				database. Search by actor, director or keyword - the right movie is
				always at your fingertips.
			</p>

			<Button type="submit" label="Register" disabled={formik.isSubmitting} />
		</form>
	);
};
