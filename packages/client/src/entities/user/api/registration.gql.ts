import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
	mutation Register(
		$name: String!
		$email: String
		$phone: String
		$password: String!
	) {
		register(name: $name, email: $email, phone: $phone, password: $password) {
			id
			name
			email
			phone
			sessionId
		}
	}
`;
