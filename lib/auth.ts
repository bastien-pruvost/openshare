// import 'server-only';

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import { unstable_getServerSession } from 'next-auth';

import { db } from '@/lib/db';

import type { NextAuthOptions } from 'next-auth';
import { verifyHash } from './utils/hash';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_JWT_SECRET,
  pages: { signIn: '/login' },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Email and Password',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'example@email.com' },
        password: { label: 'Password', type: 'password', placeholder: '********' },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const user = await db.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user.password) {
          return null;
        }
        const isPasswordValid = verifyHash(credentials.password, user.password);
        if (!isPasswordValid) {
          return null;
        }
        return user;
      },
    }),
    GithubProvider({
      id: 'github',
      name: 'Github',
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
  ],
};

export async function getServerSession() {
  return await unstable_getServerSession(authOptions);
}

export async function getServerCurrentUser() {
  const session = await getServerSession();
  return session?.user;
}
