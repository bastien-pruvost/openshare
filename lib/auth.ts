import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import { unstable_getServerSession } from 'next-auth';

import { db } from '@/lib/db';

import type { Session, NextAuthOptions } from 'next-auth';
import type { NextApiRequest, NextApiResponse } from 'next';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_JWT_SECRET,
  pages: { signIn: '/signin' },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        usernameOrEmail: { label: 'Email or Username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials) {
            return null;
          }
          const response = await fetch(`${apiUrl}/user/check-credentials`, {
            method: 'POST',
            body: JSON.stringify(credentials),
          })
            .then((res) => res.json())
            .catch(() => null);

          const user = response.user;
          if (!user) {
            return null;
          }

          return user;
        } catch (error) {
          return null;
        }
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

export async function getServerSession(req?: NextApiRequest, res?: NextApiResponse) {
  if (req && res) {
    return await unstable_getServerSession(req, res, authOptions);
  }
  return await unstable_getServerSession(authOptions);
}

export async function getServerCurrentUser(req?: NextApiRequest, res?: NextApiResponse) {
  let session: Session | null;
  if (req && res) {
    session = await getServerSession(req, res);
  }
  session = await getServerSession();
  return session?.user;
}
