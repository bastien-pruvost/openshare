import Link from 'next/link';

export default function RootPage() {
  return (
    <>
      <h1>Home Page</h1>
      <button>
        <Link href='/auth'>Go to Auth</Link>
      </button>
    </>
  );
}
