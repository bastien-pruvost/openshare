import { unstable_getServerSession } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GithubProvider from 'next-auth/providers/github';

import { db } from '@/lib/db';

import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_JWT_SECRET,
  pages: { signIn: '/login' },
  providers: [
    GithubProvider({
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
