import { db } from '@shared/firebase';
import { User } from '@entities/user/type';
import { hashPassword, comparePasswords } from '@shared/utils';
import { randomBytes } from 'crypto';

export async function registerUser(
	data: Omit<User, 'id' | 'sessionId'>
): Promise<User> {
	const usersSnap = await db.ref('users').get();
	const users: Record<string, User> = usersSnap.val() || {};

	for (const id in users) {
		if (
			(data.email && users[id].email === data.email) ||
			(data.phone && users[id].phone === data.phone)
		) {
			throw new Error('User already exists');
		}
	}

	const hashedPassword = await hashPassword(data.password);
	const newUserRef = db.ref('users').push();

	const newUser: User = {
		...data,
		password: hashedPassword,
		sessionId: null,
	};

	await newUserRef.set(newUser);
	return { id: newUserRef.key, ...newUser, password: '' };
}

export async function loginUser(
	identifier: { email?: string; phone?: string },
	password: string
): Promise<User> {
	const usersSnap = await db.ref('users').get();
	const users: Record<string, User> = usersSnap.val() || {};

	let foundId: string | null = null;
	let foundUser: User | null = null;

	for (const id in users) {
		if (
			(identifier.email && users[id].email === identifier.email) ||
			(identifier.phone && users[id].phone === identifier.phone)
		) {
			foundId = id;
			foundUser = users[id];
			break;
		}
	}

	if (!foundUser || !foundId) throw new Error('User not found');

	const valid = await comparePasswords(password, foundUser.password);
	if (!valid) throw new Error('Invalid password');

	const sessionId = randomBytes(16).toString('hex');
	await db.ref(`users/${foundId}`).update({ sessionId });

	return { id: foundId, ...foundUser, password: '', sessionId };
}

export async function logoutUser(sessionId: string): Promise<boolean> {
	const usersSnap = await db.ref('users').get();
	const users: Record<string, User> = usersSnap.val() || {};

	for (const id in users) {
		if (users[id].sessionId === sessionId) {
			await db.ref(`users/${id}`).update({ sessionId: null });
			return true;
		}
	}
	return false;
}
