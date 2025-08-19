import { gql } from 'apollo-server';

export const typeDefs = gql`
	type User {
		id: ID!
		name: String!
		email: String
		phone: String
		sessionId: String
	}

	type Query {
		me(sessionId: String!): User
	}

	type Mutation {
		register(
			name: String!
			email: String
			phone: String
			password: String!
		): User
		login(email: String, phone: String, password: String!): User
		logout(sessionId: String!): Boolean
	}
`;
