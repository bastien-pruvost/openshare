import Link from 'next/link';

import { AuthForm } from '@/components';

export default function SignInPage() {
  return (
    <>
      <button>
        <Link href='/'>Back to home</Link>
      </button>
      <h1>Sign In to OpenShare</h1>
      <AuthForm method='signin' />
    </>
  );
}
