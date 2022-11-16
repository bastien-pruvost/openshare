import Link from 'next/link';

export default async function RegisterPage() {
  return (
    <>
      <h1>Register Page</h1>
      <button>
        <Link href='/'>Back to home</Link>
      </button>
      {/* <LoginForm /> */}
    </>
  );
}
