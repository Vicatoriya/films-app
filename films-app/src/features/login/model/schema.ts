import { passwordSchema } from '@shared/lib/schema';
import { z } from 'zod';

export const loginSchema = z.object({
	identifier: z
		.string()
		.min(1, 'Identifier is required')
		.superRefine((val, ctx) => {
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			const phoneRegex = /^\+375\((29|33|44)\)-\d{3}-\d{2}-\d{2}$/;

			if (!emailRegex.test(val) && !phoneRegex.test(val)) {
				ctx.addIssue({
					code: 'custom',
					message: 'Enter a valid email or phone number (+375(XX)-XXX-XX-XX)',
					path: ['identifier'],
				});
				return;
			}

			if (phoneRegex.test(val)) {
				const digitsOnly = val.replace(/\D/g, '');
				if (digitsOnly.length !== 12) {
					ctx.addIssue({
						code: 'custom',
						message: 'Phone number must contain 12 digits',
						path: ['identifier'],
					});
				}
			}
		}),
	password: passwordSchema,
});

export type LoginFormValues = z.infer<typeof loginSchema>;
