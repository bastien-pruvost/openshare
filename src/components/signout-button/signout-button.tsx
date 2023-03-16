'use client';
import { signOut } from 'next-auth/react';

export const SignoutButton = () => {
  return <button onClick={() => signOut({ redirect: false })}>Sign Out</button>;
};
