import { ThemeSwitcher } from '@/components';
import Link from 'next/link';

// import { db } from '@/lib/db';

// import styles from './page.module.scss';

export default function RootPage() {
  // const newUser = await db.user.create({ data: { email: 'bonjour@test.fr' } });

  // const users = await db.user.findMany();

  return (
    <>
      <h1>Home Page</h1>
      <p>
        <br />
      </p>
      <button>
        <Link href='/login'>Go to Login Page</Link>
      </button>
      <p>
        <br />
      </p>
      <button>
        <Link href='/register'>Go to Register</Link>
      </button>
      <p>
        <br />
      </p>
      <ThemeSwitcher />
    </>
  );
}
