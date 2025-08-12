import { z } from 'zod';
import { passwordSchema } from '@shared/lib/schema';

export const registrationSchema = z
	.object({
		name: z
			.string()
			.min(3, 'Name must be at least 3 characters')
			.max(20, 'Name cannot exceed 20 characters'),
		email: z.string().email('Invalid email format').min(1, 'Email is required'),
		phoneNumber: z.string().min(1, 'Phone number is required'),
		password: passwordSchema,
		confirmPassword: z.string().min(1, 'Confirm password is required'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	})
	.superRefine((data, ctx) => {
		const phoneRegex = /^\+375\((29|33|44)\)-\d{3}-\d{2}-\d{2}$/;
		if (data.phoneNumber && !phoneRegex.test(data.phoneNumber)) {
			ctx.addIssue({
				code: 'custom',
				message: 'Invalid phone number format (+375(XX)-XXX-XX-XX)',
				path: ['phoneNumber'],
			});
		}
	});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
