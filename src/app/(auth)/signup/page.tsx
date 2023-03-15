import Link from 'next/link';

import { AuthForm } from 'src/components';

export default function SignInPage() {
  return (
    <>
      <button>
        <Link href='/'>Back to home</Link>
      </button>
      <h1>Sign Up to OpenShare</h1>
      <AuthForm method='signup' />
    </>
  );
}
