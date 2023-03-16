import Link from 'next/link';

import { SignupForm } from '@/components';

const SignupPage = () => {
  return (
    <>
      <button>
        <Link href='/'>Back to home</Link>
      </button>
      <h1>Sign Up to OpenShare</h1>
      <SignupForm />
    </>
  );
};

export default SignupPage;
