import { makeAutoObservable } from 'mobx';
import { ApolloError, FetchResult } from '@apollo/client';
import apolloClient from '@app/apolloClient';
import { LOGIN_USER } from '../api/login.gql';
import { REGISTER_USER } from '../api/registration.gql';
import { LOGOUT_MUTATION } from '../api/logout.gql';
import type {
	LoginUserData,
	LoginUserVars,
	RegisterUserData,
	RegisterUserVars,
	User,
} from './types';

class UserStore {
	currentUser: User | null = null;
	isAuthenticated = false;
	isLoading = false;
	error: string | null = null;

	constructor() {
		 
		makeAutoObservable(this);
	}

	async signIn(credentials: {
		email?: string;
		phone?: string;
		password: string;
	}) {
		this.isLoading = true;
		this.error = null;
		try {
			const response: FetchResult<LoginUserData> = await apolloClient.mutate<
				LoginUserData,
				LoginUserVars
			>({
				mutation: LOGIN_USER,
				variables: {
					email: credentials.email ?? null,
					phone: credentials.phone ?? null,
					password: credentials.password,
				},
			});

			if (!response.data) throw new Error('No data returned from server');

			this.currentUser = response.data.login;
			this.isAuthenticated = true;
			if (response.data.login.sessionId) {
				localStorage.setItem('sessionId', response.data.login.sessionId);
			}
		} catch (e) {
			const apolloError = e as ApolloError;
			this.error = apolloError.message;
			this.isAuthenticated = false;
		} finally {
			this.isLoading = false;
		}
	}

	async register(credentials: {
		name: string;
		email?: string;
		phone?: string;
		password: string;
	}) {
		this.isLoading = true;
		this.error = null;
		try {
			const response: FetchResult<RegisterUserData> = await apolloClient.mutate<
				RegisterUserData,
				RegisterUserVars
			>({
				mutation: REGISTER_USER,
				variables: {
					name: credentials.name,
					email: credentials.email ?? null,
					phone: credentials.phone ?? null,
					password: credentials.password,
				},
			});

			if (!response.data) throw new Error('No data returned from server');

			this.currentUser = response.data.register;
			this.isAuthenticated = true;
			if (response.data.register.sessionId) {
				localStorage.setItem('sessionId', response.data.register.sessionId);
			}
		} catch (e) {
			const apolloError = e as ApolloError;
			this.error = apolloError.message;
		} finally {
			this.isLoading = false;
		}
	}

	async logout() {
		this.isLoading = true;
		this.error = null;

		const sessionId = localStorage.getItem('sessionId');
		if (!sessionId) {
			this.isLoading = false;
			return;
		}

		try {
			await apolloClient.mutate({
				mutation: LOGOUT_MUTATION,
				variables: { sessionId },
			});

			localStorage.removeItem('sessionId');
			this.currentUser = null;
			this.isAuthenticated = false;
		} catch (e) {
			const apolloError = e as ApolloError;
			this.error = apolloError.message;
		} finally {
			this.isLoading = false;
		}
	}
}

export const userStore = new UserStore();
