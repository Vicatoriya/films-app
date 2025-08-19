import { useMutation } from '@apollo/client';
import { LOGOUT_MUTATION } from '../api/logout.gql';

export const useLogout = () => {
	const [logoutMutation, { loading, error }] = useMutation(LOGOUT_MUTATION);

	const logout = async () => {
		const sessionId = localStorage.getItem('sessionId');
		if (!sessionId) return;

		await logoutMutation({ variables: { sessionId } });
		localStorage.removeItem('sessionId');
	};

	return { logout, loading, error };
};
