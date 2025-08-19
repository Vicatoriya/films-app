import { ApolloServer } from 'apollo-server';
import { typeDefs as authTypeDefs } from '@processes/auth/schema';
import { resolvers as authResolvers } from '@processes/auth/resolver';

const server = new ApolloServer({
	typeDefs: [authTypeDefs],
	resolvers: [authResolvers],
});

export default server;
