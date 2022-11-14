// import { db } from '@/lib/db';

import styles from './page.module.scss';

interface DataType {
  name: string;
}

async function getData(): Promise<DataType> {
  const res = await fetch('http://localhost:3000/api/hello');
  return res.json();
}

export default async function LoginPage() {
  const _data = getData();
  const data = await _data;

  // const newUser = await db.user.create({ data: { email: 'bonjour@test.fr' } });

  // const users = await db.user.findMany();

  return (
    <div className={styles.container}>
      <div className={styles.alert}>
        <h1>Successfully connected</h1>
      </div>
      <h2>{data.name}</h2>
    </div>
  );
}
