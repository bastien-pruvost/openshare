'use client';

import { useForm } from 'react-hook-form';
import { signIn, signOut } from 'next-auth/react';

import { cn } from '@/lib/utils/classnames';

import styles from './login-form.module.scss';
import { db } from '@/lib/db';

type LoginFormProps = {
  className?: string;
};

type LoginFormValues = {
  email: string;
  password: string;
};

export function LoginForm({ className }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  async function onSubmit(data: LoginFormValues) {
    const res = signIn('credentials', { ...data });
    // const res = db.user.create({ data: { email: data.email, password: data.password } });
  }

  return (
    <div className={cn(styles.container, className)}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            placeholder='example@email.com'
            autoCapitalize='none'
            autoComplete='email'
            autoCorrect='off'
            {...register('email')}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            placeholder='********'
            autoCapitalize='none'
            autoComplete='current-password'
            autoCorrect='off'
            {...register('password')}
          />
        </div>
        <button>Sign In</button>
      </form>

      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
