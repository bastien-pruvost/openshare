'use client';
import styles from './auth-forms.module.scss';

import { useRouter, useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';

import { signinSchema } from '@/lib/validation/auth';
import { cn } from '@/lib/utils/classnames';

import type { z } from 'zod';

type SigninFormProps = {
  className?: string;
};

type SigninValues = z.infer<typeof signinSchema>;

export const SigninForm = ({ className }: SigninFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninValues>({ resolver: zodResolver(signinSchema) });

  const handleSignin = async (data: SigninValues) => {
    const response = await signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/',
    });

    if (!response?.ok && response?.error) {
      setError(response.error);
    }

    // if (response?.ok) {
    //   router.push('/');
    // }
  };

  const handleGithubSignin = async () => {
    const response = await signIn('github', {
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/',
    });

    if (!response?.ok && response?.error) {
      setError(response.error);
    }

    // if (response?.ok) {
    //   router.push('/');
    // }
  };

  return (
    <div className={cn(styles.container, className)}>
      <form className={styles.form} onSubmit={handleSubmit(handleSignin)}>
        <div className={styles.formGroup}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            placeholder='example@email.com'
            // autoComplete='email'
            // autoCapitalize='off'
            // autoCorrect='off'
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            placeholder='********'
            // autoComplete={method === 'signin' ? 'current-password' : 'off'}
            // autoCapitalize='off'
            // autoCorrect='off'
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button>Sign In</button>
      </form>

      <span>{error}</span>

      <button onClick={handleGithubSignin}>Sign In with GitHub</button>
    </div>
  );
};
