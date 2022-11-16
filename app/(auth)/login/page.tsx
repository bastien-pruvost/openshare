import { LoginForm } from '@/components';
import { getServerSession } from '@/lib/auth';
import Image from 'next/image';
import Link from 'next/link';
export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    console.log(session);
  } else {
    console.log("THERE ISN'T ANY SESSION");
  }

  if (session?.user) {
    return (
      <>
        <h2>Already logged</h2>
        <h3>Your are {session.user.name}</h3>
        <h3>Email: {session.user.email}</h3>
        {session.user.image && (
          <Image
            width={100}
            height={100}
            src={session.user.image}
            alt={`Photo de profil de ${session.user.name}`}
          />
        )}
      </>
    );
  }

  return (
    <>
      <h1>Login Page</h1>
      <button>
        <Link href='/'>Back to home</Link>
      </button>
      <LoginForm />
    </>
  );
}
