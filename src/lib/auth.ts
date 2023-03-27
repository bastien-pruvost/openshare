import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getServerSession as nextAuthGetServerSession } from 'next-auth';

import { db } from '@/lib/db';
import { localAppUrl } from '@/config/site';

import type { NextAuthOptions } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db), // DB Adapter (Prisma)
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET ?? '',
  pages: { signIn: '/signin' },
  providers: [
    // Github Provider to connect user with Github account
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
      allowDangerousEmailAccountLinking: true,
    }),
    // Credentials Provider to connect user with email
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      // Check credentials during a signin request
      async authorize(credentials) {
        const credentialsResponse = await fetch(`${localAppUrl}/api/user/check-credentials`, {
          method: 'POST',
          body: JSON.stringify(credentials),
        });

        const data = await credentialsResponse.json();

        if (!credentialsResponse.ok) {
          throw new Error(data.message);
        }

        // If no error and we have user data, return it
        if (credentialsResponse.ok && data.user) {
          return data.user;
        }
      },
    }),
  ],
};

export const getServerSession = async (req?: NextApiRequest, res?: NextApiResponse) => {
  if (req && res) {
    return await nextAuthGetServerSession(req, res, authOptions);
  }
  return await nextAuthGetServerSession(authOptions);
};
