import { ThemeSwitcher } from 'src/components';
import { getServerSession } from 'src/lib/auth';
import Link from 'next/link';

// import styles from './page.module.scss';

export default async function RootPage() {
  const session = await getServerSession();

  if (session) {
    console.log('SESSION : ', session);
  } else {
    console.log("THERE ISN'T ANY SESSION !");
  }

  return (
    <>
      <h1>Home Page</h1>
      <p>
        <br />
      </p>
      <button>
        <Link href='/signin'>Go to Sign In Page</Link>
      </button>
      <p>
        <br />
      </p>
      <button>
        <Link href='/signup'>Go to Sign Up Page</Link>
      </button>
      <p>
        <br />
      </p>
      <ThemeSwitcher />
    </>
  );
}
