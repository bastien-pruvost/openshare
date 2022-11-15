// import { db } from '@/lib/db';

import ThemeSwitcher from '@/components/theme-switcher';
import styles from './page.module.scss';

export default async function LoginPage() {
  // const newUser = await db.user.create({ data: { email: 'bonjour@test.fr' } });

  // const users = await db.user.findMany();

  return (
    <div className={styles.container}>
      <div className={styles.alert}>
        <h1>Successfully connected</h1>
      </div>
      <ThemeSwitcher />
    </div>
  );
}
