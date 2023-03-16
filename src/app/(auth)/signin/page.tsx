import Link from 'next/link';

import { SigninForm } from '@/components';

const SigninPage = () => {
  return (
    <>
      <button>
        <Link href='/'>Back to home</Link>
      </button>
      <h1>Sign In to OpenShare</h1>
      <SigninForm />
    </>
  );
};

export default SigninPage;
