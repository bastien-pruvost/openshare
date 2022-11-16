'use client';

import { signIn } from 'next-auth/react';

// import { getServerSession } from '@/lib/auth';

export function LoginForm() {
  return (
    <>
      <p>
        <br />
      </p>
      Not signed in <br />
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
    </>
  );
}
