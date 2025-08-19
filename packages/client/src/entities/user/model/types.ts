export interface User {
	id: string;
	name: string;
	email?: string | null;
	phone?: string | null;
	password: string;
	sessionId?: string | null;
}

export interface RegisterUserVars {
	name: string;
	email?: string | null;
	phone?: string | null;
	password: string;
}

export interface RegisterUserData {
	register: User;
}

export interface LoginUserVars {
	email?: string | null;
	phone?: string | null;
	password: string;
}

export interface LoginUserData {
	login: User;
}
