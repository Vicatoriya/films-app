import { z } from 'zod';

export const passwordSchema = z
	.string()
	.min(8, 'Password must be between 8 and 15 characters')
	.max(15, 'Password must be between 8 and 15 characters')
	.regex(/[0-9]/, 'Password must contain at least one digit')
	.regex(/[a-z]/, 'Password must contain at least one lowercase letter')
	.regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
	.regex(
		/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
		'Password must contain at least one special character'
	);
