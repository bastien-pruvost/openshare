import Link from 'next/link';

// import { db } from '@/lib/db';

// import styles from './page.module.scss';

export default async function LoginPage() {
  // const newUser = await db.user.create({ data: { email: 'bonjour@test.fr' } });

  // const users = await db.user.findMany();
  return (
    <>
      <button>
        <Link href='/'>Back to home</Link>
      </button>
    </>
  );
}
