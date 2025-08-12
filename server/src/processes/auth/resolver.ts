import { registerUser, loginUser, logoutUser } from './model';
import { db } from '@shared/firebase';

export const resolvers = {
  Query: {
    me: async (_: any, { sessionId }: { sessionId: string }) => {
      const usersSnap = await db.ref('users').get();
      const users = usersSnap.val() || {};
      for (const id in users) {
        if (users[id].sessionId === sessionId) {
          const { password, ...safeUser } = users[id];
          return { id, ...safeUser };
        }
      }
      throw new Error('Invalid session');
    },
  },

  Mutation: {
    register: (_: any, args: any) => registerUser(args),
    login: (_: any, args: any) => loginUser({ email: args.email, phone: args.phone }, args.password),
    logout: (_: any, { sessionId }: { sessionId: string }) => logoutUser(sessionId),
  },
};
