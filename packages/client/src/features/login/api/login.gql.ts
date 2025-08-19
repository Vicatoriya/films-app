import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation Login($email: String, $phone: String, $password: String!) {
		login(email: $email, phone: $phone, password: $password) {
			id
			name
			email
			phone
			sessionId
		}
	}
`;
