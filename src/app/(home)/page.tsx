import Link from 'next/link';
import { getServerSession } from '@/lib/auth';
import { ThemeButton } from '@/components';
import { SignoutButton } from '@/components';

// import styles from './page.module.scss';

const RootPage = async () => {
  const session = await getServerSession();

  if (session) {
    console.log('SESSION : ', session);
  } else {
    console.log('NO SESSION !');
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
      <SignoutButton />
      <p>
        <br />
      </p>
      <ThemeButton />
    </>
  );
};

export default RootPage;
