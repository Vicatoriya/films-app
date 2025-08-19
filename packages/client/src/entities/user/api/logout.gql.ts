import { gql } from '@apollo/client';

export const LOGOUT_MUTATION = gql`
	mutation Logout($sessionId: String!) {
		logout(sessionId: $sessionId)
	}
`;
